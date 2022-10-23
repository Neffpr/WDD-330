import { writeToLS, readFromLS, bindTouch } from "./utils";

let liveToDos = null;

function renderList(list, element, toDos, doNotFilter){
    console.log(list);
    element.innerHTML = "";

    list.foreach(toDo => {
        const item = document.createElement("li");
        const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

        let cb = null;
        let btn = null;

        if(doNotFilter && toDo.completed){
            item.innerHTML = `<label><input type="checkbox" checked><strike>${toDo.content}</strike></label>`;
        }
        else if(doNotFilter && !toDo.completed){
            item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button>X</button>`;
        }
        else if(!doNotFilter && !toDo.completed){
            item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button>X</button>`;
        }
        
        if(doNotFilter || (!doNotFilter && !toDo.completed) ){
            cb = item.childNodes[0].childNodes[0];

            if(cb){
                cb.addEventListener("change",function(){
                    toDos.completeToDo(toDo.id);
                });
            }
    
            btn = item.childNodes[1];
            if(btn){
                btn.addEventListener("click", function(){
                    toDos.removeToDo(toDo.id);
                });
            }
    
            element.appendChild(item);
        }
    });
}

function getToDos(key){
    if (liveToDos === null){
        liveToDos = readFromLS(key) || [];
    }
    return liveToDos;
}

function addToDo(value,key){
    const newToDo = {
        id: new Date(),
        content: value,
        completed: false
    };

    liveToDos.push(newToDo);
    writeToLS(key,liveToDos);
}

function deleteToDo(key){
    let newList = liveToDos.filter(item => item.id != key);
    liveToDos = newList;
    writeToLS(key, liveToDos);
}

function filterToDos(key, completed = true){
    let toDos = getToDos(key);
    return toDos.filter(item => item.completed === doNotFilter);
}

export default class ToDos{
    constructor(listElement, key){
        console.log(this.element);
        this.listElement = listElement;
        console.log(this.listElement);
        
        this.key = key;
        bindTouch("#addToDo", this.newToDo.bind(this));
        bindTouch("#listAll", this.listToDos.bind(this))
        this.listToDos("#listCompleted", this.listToDos,bind(this,false));

        this.listToDos();
    }

    newToDo(){
        const task = document.getElementById("todoInput");
        addToDo(task.value, this.key);
        task.value = "";
        this.listToDos();
    }

    findToDo(id) {
        let toDo = liveToDos.find( element =>{
            return element.id === id;
        });
        return toDo;
    }
    completeToDo(id){
        console.log(id + "checked");
        let toDo = this.findToDo(id);

        if(toDo){
            toDo.completed = !toDo.completed;
            writeToLS(this.key, liveToDos);
            renderList(liveToDos, this.listElement,this, true);
        }
    }

    removeToDo(id){
        console.log(id + "removed");
        let toDo = this.findToDo(id);

        if(toDo){
            deleteToDo(id);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    listToDos(doNotFilter = true){
        renderList(getToDos(this.key), this.listElement,this,doNotFilter);
    }
}

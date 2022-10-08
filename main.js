const links = [
    {
      label: "Week1 notes",
      url: "week1/story_editor.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    }     
  ]      

// const unordered_list = document.createElement("li")
for(let i = 0; i < links.length; i++){
    document.getElementById("directory").innerHTML+=`<li><a href='${links[i].url}'>${links[i].label}<a/></li>`
}


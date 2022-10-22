const links = [
    {
      label: "Week1 Reading Assignment",
      url: "week1/story_editor.html"
    },
    {
        label: "Week2 Reading Assignment",
        url: "week2/Readings2.html"
    },
    {
      label: "Week2 Team Assignment",
      url: "week2/TeamWK2.html"
    },
    {
        label: "Week3 Reading Assignment",
        url: "week3/Readings3.html"
    },
    {
      label: "Week3 Team Assignment",
      url: "week3/TeamWK3.html"
    },    
    {
      label: "Week4 Reading Assignment",
      url: "week4/Readings4.html"
    },
    {
      label: "Week4 Team Assignment",
      url: "week4/TeamWK4.html"
    },    
    {
        label: "Week5 Reading Assignment",
        url: "week5/Readings5.html"
    },
    {
      label: "Week5 Team Assignment",
      url: "week5/W06team.html"
    },     
    {
        label: "ToDo Assignment",
        url: "ToDo/ToDo.html"
    }    
    
  ]      

// const unordered_list = document.createElement("li")
for(let i = 0; i < links.length; i++){
    document.getElementById("directory").innerHTML+=`<li><a href='${links[i].url}'>${links[i].label}<a/></li>`
}


const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", App.fetchAllItems)



 // EVENT LISTENERS

 document.querySelector("#submitItem").addEventListener("click", (e)=>{
     e.preventDefault()
     let newStuff = new Item(document.querySelector("#itemName").value, document.querySelector("#calorieNumber").value)
 
     newStuff.postItem()
     
 })
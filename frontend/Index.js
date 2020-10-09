const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", App.fetchAllUsers)



 // EVENT LISTENERS

 document.querySelector("#submitItem").addEventListener("click", (e)=>{
     e.preventDefault()
     let newStuff = new Item(document.querySelector("#itemName").value, document.querySelector("#calorieNumber").value)
 
     newStuff.postItem()
     App.addAll()
 })

 // DELETE AND EDIT FUNCTIONS 

 
function addDeleteAndEditListeners(){
    let ed = document.querySelectorAll('*[id^="edit-"]')

     ed.forEach(e=>{
            
         e.addEventListener("click", function(){

            // let initialItem = {
            //     id : this.parentElement.dataset["id"],
            //     name : this.parentElement.querySelector(".itemName").innerText,
            //     calories : this.parentElement.querySelector(".itemCalories").innerText
            // }

            if(e.className === "editItem"){
                e.parentNode.querySelector(".itemName").innerHTML = `<input type="text" value="${e.parentNode.querySelector(".itemName").innerText}" class="itemName">`
                e.parentNode.querySelector(".itemCalories").innerHTML = `<input type="number" value="${e.parentNode.querySelector(".itemCalories").innerText}" class="itemCalories">`
                e.className = "saveItem"
                e.innerText = "Save"
            } else if(e.className === "saveItem"){
                let changedItem = {
                    id : this.parentElement.dataset["id"],
                    name : this.parentElement.querySelector(".itemName > input").value,
                    calories : this.parentElement.querySelector(".itemCalories > input").value
                }
                // debugger
                e.parentNode.querySelector(".itemName").innerHTML = `${document.querySelector(".itemName > input").value}`
                e.parentNode.querySelector(".itemCalories").innerHTML = `${document.querySelector(".itemCalories > input").value}`

                let i = new Item(changedItem)
                i.save()
                e.className = "editItem"
                e.innerText = "Edit"
            }

         })
     })

     let li = document.querySelectorAll('*[id^="delete-"]')
     li.forEach(e=>{
         e.addEventListener("click", function(){

             let hehe = {
                 id : this.parentElement.dataset["id"],
                 name : this.parentElement.querySelector(".itemName").innerText,
                 calories : this.parentElement.querySelector(".itemCalories").innerText
             }
             console.log(hehe)
             let i = new Item(hehe)
             i.delete()
             this.parentElement.remove()
            //  debugger
             App.addAll()
         })
     })
}
document.querySelector("#createUser").addEventListener("click", (e)=>{
    e.preventDefault()
    let user = {
        username: document.querySelector("#userName").value
    }

    let uu = new User(user)

    uu.postUser()
    document.querySelector("#userName").value = ""
})
document.querySelector("#selectUser").addEventListener("click", e=>{
    e.preventDefault()
    let user = {
        id : e.target.parentElement.querySelector("#users").value
    }
    let u = new User(user)

    u.getUserItems()
})


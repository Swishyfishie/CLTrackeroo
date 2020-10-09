class App {
    static allItems = []
 
 
     static fetchAllItems(){
         fetch(BASE_URL+"/items")
         .then(res => res.json())
         .then(items => 
             items.map(e => {
                 let newItem = new Item(e)
         document.querySelector("#items-container").innerHTML += newItem.render()
         addDeleteAndEditListeners()
         App.allItems.push(newItem)
         App.addAll()
         }))
 
 
     }
 
 
 
    static addAll(){
    let sum = 0
    document.querySelectorAll(".itemCalories").forEach(e => {

    sum += parseInt(e.innerText)
        // debugger
    })
    document.querySelector("#totalCalories").innerHTML = `Total calories : ${sum}`
    
}
    
 }
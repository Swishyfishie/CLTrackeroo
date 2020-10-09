class Item {
    constructor(obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.calories = obj.calories;
      this.user_id = obj.user_id
    }
  
    render() {

  
      return `
          <div class="itemDetails" data-id="${this.id}">
              <p>Name:</p><p class="itemName">${this.name}</p>  
              <p>Calories:</p><p class="itemCalories">${this.calories}</p> 
              <button id="delete-${this.id}" class="deleteItem">Delete</button>
              <button id="edit-${this.id}" class="editItem">Edit</button>
          </div>
  
          `;
    }
    postItem(){
      debugger
      const item = {
          name: document.querySelector("#itemName").value,
          calories: document.querySelector("#calorieNumber").value,
          user_id: document.querySelector("#users").value
      }
  
      fetch(BASE_URL+"/items", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
              'Content-Type': 'application/json',
              'Accept':'application/json'
          }
      })
      .then(res => res.json())
      .then(item => {
          let items = document.querySelector("#items-container")
          // items.innerHTML += `
          // <div class="itemDetails" data-id="${item.id}"><p class="itemName">${item.name}: </p>  <p class="itemCalories">${item.calories}</p> 
          // <button class="deleteItem">Delete</button><button id="edit-${this.id}" class="editItem">Edit</button></div>
          // `
          items.innerHTML += `
          <div class="itemDetails" data-id="${item.id}">
              <p class="itemName">${item.name}</p>  <p class="itemCalories">${item.calories}</p> 
              <button id="delete-${item.id}" class="deleteItem">Delete</button>
              <button id="edit-${item.id}" class="editItem">Edit</button>
          </div>
          `
            // items.innerHTML += this.render()
            
          addDeleteAndEditListeners()
        //   App.allItems.push(new Item(item))
          // debugger
          App.addAll()
      })
      document.querySelector("#itemName").value = ''
      document.querySelector("#calorieNumber").value = ''
  
  }
  
  delete(){
  
      let currentId = this.id
      
      fetch(BASE_URL+`/items/${currentId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
      })
      App.addAll()
  }
  
  save(){
  
      console.log("SAVED")
  
      let currentId = this.id 
         fetch(BASE_URL+`/items/${currentId}`, {
             method: "PUT",
             body: JSON.stringify(this),
             headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
             }
         })
         .then(res => res.json())
         .then(item => console.log(item))
  
         App.addAll()
  }
  }
  
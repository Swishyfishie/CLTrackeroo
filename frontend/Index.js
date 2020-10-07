class Item {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.calories = obj.calories;
  }

  render() {
    // generate dynamic ids for the buttons "delete-${e.id}"

    return `
        <div class="itemDetails" data-id="${this.id}">
            <p class="itemName">${this.name}:</p>  <p class="itemCalories">${this.calories}</p> 
            <button id="delete-${this.id}" class="deleteItem">Delete</button>
            <button id="edit-${this.id}" class="editItem">Edit</button>
        </div>

        `;
  }
}

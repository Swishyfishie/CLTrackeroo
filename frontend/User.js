class User {
    constructor(obj){
        this.id = obj.id
        this.username = obj.username
    }

    render(){
        return `
        <option value="${this.id}">${this.username}</option>

        ` 
    }

    postUser(){
        
        document.querySelector("#users").innerHTML = ""
        let user = {
            username : this.username
        }

        fetch(BASE_URL+"/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        .then(res => res.json())
        .then(user => console.log(user))

        App.fetchAllUsers()
    }  

    getUserItems(){
        
        App.allItems = []
        fetch(BASE_URL+`/users/${this.id}`)
        .then(res => res.json())
        .then(user => {
            // let newUser = new User(user)
            document.querySelector("#items-container").innerHTML = ""

            if(user.items.length === 0){
                document.querySelector("#items-container").innerHTML = "<h4>There are no items here</h4>"
            } else {
                user.items.map(e=>{
                    let gg = new Item(e)
                    document.querySelector("#items-container").innerHTML += gg.render()
                    // App.allItems.push(gg)
                    App.addAll()
                })
            }
            
            
            addDeleteAndEditListeners()
        })
    }
}
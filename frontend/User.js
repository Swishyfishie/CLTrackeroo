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
    }  
}
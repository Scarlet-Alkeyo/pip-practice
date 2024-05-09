class following{
    constructor(user){
        this.user=user
        this.follower=[]
    }
    addUser(follower){
        if(this.follower.includes(follower))
        console.log("exist")
    else{this.follower.push(follower)
    }
}
}
const Scarlet = new following("Scarlet")
Scarlet.addUser("Faith")
console.log(Scarlet)


  


  

 
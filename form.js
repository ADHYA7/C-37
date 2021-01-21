class Form{
    constructor(){
        this.input = createInput("NAME")
        this.button = createButton("join")
        this.greetings = createElement("h3")

    }
    hide(){
        this.greetings.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("Multiple Player Game")
        title.position(130,0)
     
        this.input.position(130,160)
      
        this.button.position(200,200)
       
        this.button.mousePressed(()=>{
          this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount+1;
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
           this. greetings.html("HI WELCOME TO THE GAME"+ player.name)
           this.greetings.position(130,200)
        })
    }
}
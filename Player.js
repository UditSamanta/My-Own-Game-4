class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = createSprite(this.x, this.y, 50, 50);

        
    }
    
    display() {
        
        drawSprites();
    }
}
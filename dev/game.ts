class Game {
    private static instance: Game;

    public canvas: HTMLCanvasElement;

    public context: CanvasRenderingContext2D;


    constructor() {
    
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        //creeren van 2d objecten in de Canvas
        this.context = this.canvas.getContext('2d');


// als het venster van grootte word aangepast.
        document.addEventListener('resize', function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;


        });

        // let circle = new Circle;

     }

    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}

console.log('test');

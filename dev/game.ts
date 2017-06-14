class Game {
    public canvas: HTMLCanvasElement;

    public context: CanvasRenderingContext2D;

    // private circle: Circle;

    // public mouse: any;

    // public maxRadius: number;

    // public colorArray: Array<string> = new Array();

    // public circleArray: Array<Object> = new Array();

    // // public circleArray = Array<Object>();

    // protected x: number;
    // protected y: number;
    // protected dx: number;
    // protected dy: number;
    // protected radius: number;
    // protected minRadius: number;
    // protected color;
    // // aanmaak van de variabele van de muis, waarbij de coordinaten een waarden krijgen in de eventListener 'mousemove'
    // public mouseX: number;
    // public mouseY: number;


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
}

console.log('test');

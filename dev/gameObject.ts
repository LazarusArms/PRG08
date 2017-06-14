///<reference path='game.ts'/>

 class GameObject extends Game {
    private circle: Circle;

    public mouse: any;

    public maxRadius: number;

    public colorArray: Array<string> = new Array();

    public circleArray: Array<Object> = new Array();

    protected x: number;
    protected y: number;
    protected dx: number;
    protected dy: number;
    protected radius: number;
    protected minRadius: number;
    protected color;
    // aanmaak van de variabele van de muis, waarbij de coordinaten een waarden krijgen in de eventListener 'mousemove'
    public mouseX: number;
    public mouseY: number;
    
    constructor(){
        super();

        this.maxRadius = 40;
        this.minRadius = 3;

        //kleur waardes van de kleur array die ervoor zorgt welke kleur elke cirkeltje krijgt.
        this.colorArray  = new Array<string>(
            '#BD2320',
            '#CDCDCD',
            '#244036',
            '#797072',
            '#7B3F1E',
        );


        // maakt een array aan van de cirkeltjes die getekend worden.
            for (let i = 0; i < 2000; i++) {
            this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
            this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
            this.dx = (Math.random() - 0.5);
            this.dy = (Math.random() - 0.5);
            this.radius = Math.random() * 3 + 1;
            this.circleArray.push(new Circle());
        }

        requestAnimationFrame(() => this.update());
        }

        public update(): void {
        this.draw();
        requestAnimationFrame(() => this.update());
    }

        public draw(): void {
        this.circle.draw();

    }
        
    
 }
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function () {
    function Game() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        document.addEventListener('resize', function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
    return Game;
}());
console.log('test');
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        var _this = this;
        _super.call(this);
        this.colorArray = new Array();
        this.circleArray = new Array();
        this.maxRadius = 40;
        this.minRadius = 3;
        this.colorArray = new Array('#BD2320', '#CDCDCD', '#244036', '#797072', '#7B3F1E');
        for (var i = 0; i < 2000; i++) {
            this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
            this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
            this.dx = (Math.random() - 0.5);
            this.dy = (Math.random() - 0.5);
            this.radius = Math.random() * 3 + 1;
            this.circleArray.push(new Circle());
        }
        requestAnimationFrame(function () { return _this.update(); });
    }
    GameObject.prototype.update = function () {
        var _this = this;
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    GameObject.prototype.draw = function () {
        this.circle.draw();
    };
    return GameObject;
}(Game));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    }
    Circle.prototype.update = function () {
        var _this = this;
        if (this.x + this.radius > innerWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        if (this.mouseX - this.x < 50 && this.mouse.x - this.x > -50 &&
            this.mouseY - this.y < 50 && this.mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius) {
                this.radius += 1;
            }
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    Circle.prototype.draw = function () {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fillStyle = this.color;
        this.context.fill();
    };
    return Circle;
}(GameObject));
console.log('hallo');
//# sourceMappingURL=main.js.map
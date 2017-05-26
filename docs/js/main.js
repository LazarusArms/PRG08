var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        this.circleArray = Array();
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        this.maxRadius = 40;
        this.minRadius = 3;
        this.colorArray = [
            '#BD2320',
            '#CDCDCD',
            '#244036',
            '#797072',
            '#7B3F1E',
        ];
        window.addEventListener('mousemove', function (event) {
            this.mouseX = event.x;
            this.mouseY = event.y;
        });
        document.addEventListener('resize', function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
        this.dx = (Math.random() - 0.5);
        this.dy = (Math.random() - 0.5);
        this.radius = Math.random() * 3 + 1;
        this.circleArray.push(new Circle());
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.update = function () {
        var _this = this;
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    Game.prototype.draw = function () {
        this.circle.draw();
    };
    return Game;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.color = _this.colorArray[Math.floor(Math.random() * _this.colorArray.length)];
        return _this;
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
}(Game));
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map
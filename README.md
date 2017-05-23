UML STAAT IN DE ROOT VAN DE MAP.

Wat op dit moment af is:

De animatie en interactie met de bubbels is af, hier kan je door met je muis te hoveren over het canvas de bubbels beinvloeden.

Wat nog gedaan moet worden:

De enemies in de game moeten nog aangemaakt worden, deze zorgen voor uitdaging binnen de game omdat je deze moet ontwijken. Mocht de speler alsnog hoveren over deze elementen, dan is het game over.

Installatie instructies

Mijn game gebruikt geen externe libraries, hierdoor is hij meteen te spelen als je hem runt. Mogelijk wil ik nog gebruik maken van de beschikbare libraries, maar voor nu houd ik het simpel.

Programmeerprincipes die toegepast zijn

interface

Momenteel heb ik geen interface toegepast. Dit wil ik pas gaan doen als ik sommige delen van m'n code heb omgezet naar typescript (staat momenteel in javascript).

Static Utility Method

Nog niet mee begonnen.

Singleton

Ook nog niet mee begonnen.

Encapsulation

Binnenkort ben ik van plan om dit te gaan toepassen, de code waar ik encapsulation voor zou willen gebruiken staat momenteel nog in javascript. Hierdoor kun je geen private, public en protected waardes toepassen.

Inheritance

Momenteel heb ik de opzet gemaakt voor inheritance, zo link ik alle child classes naar de parentclass gameObjects.

#Overige Info

Veel gewerkt met het meesteren van de canvas. Animeren is super tof. Inspiratie opgedaan uit spellen zoals agar.io. Moeilijkheidsgraad toevoegen om de game longetivity te verhogen waardoor spelers blijven hangen.

Uitlichten van Code

Interactivity van de getekende cirkels:

//hoeveelheid cirkels worden hier getekend.
for (var i = 0; i < 2000; i++){
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius = Math.random() * 3 + 1;
    circleArray.push(new Circle(x ,y ,dx ,dy , radius));

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
x

// hier worden de objecten getekend in de venster.
    this.draw = function() {
        c.beginPath();
        c.arc(this.x ,this.y , this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
            if( this.x + this.radius > innerWidth || 
                this.x - this.radius < 0) {
                this.dx= -this.dx;
            }

            if (this.y + this.radius > innerHeight || 
                this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
        
            this.x += this.dx;
            this.y += this.dy;


            // interactivity waarbij de muis hover ervoor zorgt dat de cirkeltjes groter en kleiner worden.

            if  (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                 mouse.y - this.y < 50 && mouse.y - this.y > -50
                ) {
                    if (this.radius < maxRadius) {
                        this.radius += 1;
                    }
            
                }   else if (this.radius > this.minRadius) {
                        this.radius -= 1;
                }
        
                this.draw();
            }


}



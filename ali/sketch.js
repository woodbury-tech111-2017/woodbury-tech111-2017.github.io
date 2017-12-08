var Intro, play, sc2, pr, t1, t2, t3, t4, t5, b1, b2, b3;

var scr = 1;
var bac = [];
var numBac = 15;
var w = 600;
var c = 50;
var wave = 0.3;
var fast = 3;
var x = 0.3;
var s = 0.00002;



function preload() {
        Intro = loadImage("In1.jpg");
        play = loadImage("P.png");
        pr = loadImage("PR.png");
        sc2 = loadImage("sc2.jpg");
        t1 = loadImage("L1T_1.png");
        t2 = loadImage("L2T_2.png");
        t3 = loadImage("L3T_3.png");
        t4 = loadImage("L4T_4.png");
        t5 = loadImage("L5T_5.png");
        b1 = loadImage("B1.png");
        b2 = loadImage("B2.png");
        b3 = loadImage("B3.png");
        br = loadImage("br2.png");
        los = loadImage("los2.png");
        bp = loadImage("brush b.png");
}

function setup() {
        createCanvas(1920, 1080);
        for (var i = 0; i < numBac; i++) {
                if (i % 3 == 0) {
                        bac[i] = new Circle(850, 550, 5, b1);
                } else if (i % 3 == 1) {
                        bac[i] = new Circle(850, 550, 10, b2);
                } else {
                        bac[i] = new Circle(850, 550, 15, b3);
                }

        }
        setInterval(JB, 1000 / 4);
}
function drawScreen2 () {
  image(los,0,0,0,0);
  
}


function draw () {
        background(248, 172, 174);

        if (bac.length >= 40) {
                image(t5, 0, 0, 0, 0);
        } else if (bac.length >= 30) {
                image(t4, 0, 0, 0, 0);
        } else if (bac.length >= 20) {
                image(t3, 0, 0, 0, 0);
        } else if (bac.length >= 10) {
                image(t2, 0, 0, 0, 0);
        } else if (bac.length >= 0) {
                image(t1, 0, 0, 0, 0);
        }


        image(br, mouseX, mouseY, 0, 0);
  textSize(100);
	text(nf(millis() / 1000, 0, 2), 30, 1050);



        for (var i = 0; i < bac.length; i++) {
                bac[i].move();
                bac[i].display();

                if (bac[i].OnScreen() == false) {
                        drawScreen2();
                  bac[i].stop();


                }
        }
}

function JB() {
        bac.push(new Circle(850, 550, 5, b1));
        bac.push(new Circle(850, 550, 10, b2));
        bac.push(new Circle(850, 550, 15, b3));



}


function mouseMoved() {

        for (var i = bac.length - 1; i >= 0; i--) {
                if (bac[i].mouseOver()) {
                        bac.splice(i, 1);


                }
        }


}

function Circle(inX, inY, inSpeed, inImg) {
        this.x = inX;
        this.y = inY;
        this.r = 15;
        this.speed = 2;
        this.col = color(255);
        this.speed = inSpeed;
        this.img = inImg;

        this.mouseOver = function() {
                return dist(this.x, this.y, mouseX, mouseY) < this.r;
        }

        this.move = function() {
                this.x += random(-this.speed, this.speed);
                this.y += random(-this.speed, this.speed);
        }

        this.display = function() {
                if (this.mouseOver()) {
                        this.col = color(255);
                } else {
                        this.col = color(63, 122, 0);


                }

                var q = c + sin(wave) * c;

                fill(this.col);
                image(this.img, this.x, this.y, q, q);
                wave = wave + s;
                x = x + s;
        }
        this.OnScreen = function() {
                if (this.x >= 0 && this.x <= width && this.y >= 0 && this.y <= height) {
                        return true;
                } else {
                        return false;
                }
        }

}
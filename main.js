//credit to youtube user Hevipelle for the basic clicker framework

var lastUpdate = Date.now();
var origins = [];

class Player {
    constructor(or1 = null, or2 = null, orcount = 0) {
        this.origin1 = or1;
        this.origin2 = or2;
        this.origincount = orcount;
    }

    getOr1Name() {
        if(this.origin1 != null) {
            return this.origin1.name;
        }
        return "nothing";
    }

    getOr2Name() {
        if(this.origin2 != null) {
            return this.origin2.name;
        }
        return "nothing";
    }

    resetOrigins() {
        this.origin1 = null;
        this.origin2 = null;
        this.origincount = 0;
    }
}

var player = new Player();

function addOrigin(name,desc) {
    let origin = {
        name: name,
        desc: desc
    }
    origins.push(origin);
}

function format(amount) {
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) {return amount.toFixed(2)};
    return mantissa.toFixed(2) + "e" + power;
}

function pickOrigin(i) {
    if (player.origincount < 1) {
        player.origin1 = origins[i-1];
        player.origincount++;
    } else if (player.origincount < 2) {
        player.origin2 = origins[i-1]
        player.origincount++;
    }
}

function descBox(i) {
    if(i==0) {
        document.getElementById("desc-box").textContent = "";
    }
    else{document.getElementById("desc-box").textContent = origins[i-1].desc};
}

function mainPage() {
    document.getElementById("origin-wrapper").style.display = "none";
    document.getElementById("main-wrapper").style.display = "block";
}

function updateGUI() {
    for(let i = 0; i<13; i++){
        if (player.origincount > 1) {document.getElementById("or" + (i+1)).classList.add("locked")}
        else {document.getElementById("or" + (i+1)).classList.remove("locked")};
    }
    document.getElementById("origins-chosen").innerHTML = "Origins chosen: " + player.getOr1Name() + " and " + player.getOr2Name() + ".";
}

/*function productionLoop(diff) {
    money += generators[0].amount * generators[0].mult * diff;
    for(let i = 1; i<13; i++){
        generators[i-1].amount += generators[i].amount * generators[i].mult * diff / 5;
    }
}*/

function mainLoop() {
    var diff = (Date.now() - lastUpdate)/1000;
    //productionLoop(diff);
    updateGUI();

    lastUpdate = Date.now();
}

addOrigin('alien','Whether you know it or not, you or your lineage come from a planet or universe that is different from our own. Choosing this origin gives you a bonus to: ');
addOrigin('artifact','Your abilities come from a strange artifact of mysterious origin and great power. Choosing this origin gives you a bonus to: ');
addOrigin('blessed','Your powers were bestowed upon you by a deity, making you one of their greatest disciples. Choosing this origin gives you a bonus to: ');
addOrigin('construct','You were not born - you were constructed. Whether android, elemental construct, or something else, you were made by someone. Choosing this origin gives you a bonus to: ');
addOrigin('deity','The power of the gods - or demons - is in your lifeblood. No mortal can stand above you. Choosing this origin gives you a bonus to: ');
addOrigin('experiment','Through some experiment - whether accidentally or intentionally - you were given superhuman powers. Choosing this origin gives you a bonus to: ');
addOrigin('genetic','A mutation in your DNA has provided you with great power from birth, though some consider you to be an aberration. Choosing this origin gives you a bonus to: ');
addOrigin('magic','The universe has provided you with an innate ability to control magical energy. Choosing this origin gives you a bonus to: ');
addOrigin('mutated','Though you were not born with it, an event in your life caused your DNA to change in miraculous ways. Choosing this origin gives you a bonus to: ');
addOrigin('rich','You weren\'t born with special powers, but you don\'t need them with pockets as full as yours. Choosing this origin gives you a bonus to: ');
addOrigin('scientist','Your ingenuity led to a scientific breakthrough - one that you used to enhance your own abilities. Choosing this origin gives you a bonus to: ');
addOrigin('talented','Through years of rigorous training, your talent has come to rival the super-powered abilities of your peers. Choosing this origin gives you a bonus to: ');
addOrigin('technology','You may not be strictly super-powered, but the advanced cybernetics within your body or the high-tech weaponry you use make you a threat. Choosing this origin gives you a bonus to: ');

setInterval(mainLoop, 50);

updateGUI();
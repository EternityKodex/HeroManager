//credit to youtube user Hevipelle for the basic clicker framework
//if you're not me and you're reading this: try opening this in a code editor! this code is a "bit" messy so I put a lot of stuff into brackets for easy collapse-ability

var lastUpdate = Date.now();

////functions
function randFloor(i=1) {
    return Math.floor(Math.random() * i);
}

function addOrigin(name,desc) {
    let origin = {
        name: name,
        desc: desc
    }
    game.origins.push(origin);
}

function format(amount) {
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3) {return amount.toFixed(2)};
    return mantissa.toFixed(2) + "e" + power;
}

function pickOrigin(i) {
    if (game.player.origincount < 1) {
        game.player.origin1 = game.origins[i-1];
        game.player.origincount++;
    } else if (game.player.origincount < 2) {
        if (game.player.origin1 != game.origins[i-1]) {
            game.player.origin2 = game.origins[i-1]
            game.player.origincount++;
        }
    }
}

function pickPower(i) {
    if (game.player.powers.length < 1) {
        game.player.powers.push(game.powers[i-1]);
    } else if (game.player.origincount < 3) {
        if (!game.player.powersCheck(game.powers[i-1])) {
            game.player.powers.push(game.powers[i-1]);
        }
    }
}

//random hero gen functions
function realName() {
    let nameString = "";
    if (randFloor(2) == 0) {
        nameString += femaleNames[randFloor(femaleNames.length)];
    } else {
        nameString += maleNames[randFloor(maleNames.length)];
    }
    nameString += " " + surnames[randFloor(surnames.length)];
    return nameString;
}

function heroName() {
    let nameString = "";
    let capsFixer = false;
    let juncPicker = randFloor(10);
    
    if (randFloor(10) < 2) {
            nameString += "The ";
    }
    if (randFloor(10) == 0) {
        //intentionally left blank, I'm sure there's a better way to do this but there ya go
    } else {
        nameString += prefix[randFloor(prefix.length)];
        if (juncPicker < 7) {
            nameString += " ";
        } else if (juncPicker < 8) {
            nameString += "-";
        } else {
            capsFixer = true;
        }
    }
    if (capsFixer == false) {
        nameString += suffix[randFloor(suffix.length)];
    } else {
        nameString += suffix[randFloor(suffix.length)].toLowerCase();
    }
    return nameString;
}

function randomOrigin() {
    let oris = [];
    for(let i = 0; i<randFloor(2)+1; i++) {
        oris[i] = game.origins[randFloor(game.origins.length)];
        if((oris[0] == oris[i]) && i!=0) {
            oris[i] = null;
        }
    }
    return oris;
}

function randomPowers() {
    let pows = [];
    for(let i = 0; i<randFloor(4)+1; i++) {
        pows[i] = game.powers[randFloor(game.powers.length)];
        if((pows[i-1] == pows[i]) && i!=0) {
            pows[i] = null;
            i--;
        }
    }
    return pows;
}

function randomGen() {
    let out = new Hero(rn = realName(), hn = heroName());
    let oris = randomOrigin();
    out.origin1 = oris[0];
    out.origin2 = oris[1];
    //man that origin code SUCKS lol
    out.agl = randFloor(101);
    out.cca = randFloor(101);
    out.cnc = randFloor(101);
    out.con = randFloor(101);
    out.def = randFloor(101);
    out.int = randFloor(101);
    out.men = randFloor(101);
    out.per = randFloor(101);
    out.pot = randFloor(101);
    out.rca = randFloor(101);
    out.itm = randFloor(101);
    out.str = randFloor(101);
    out.twk = randFloor(101);

    out.powers = randomPowers();
    return out;
}

//temp function for proof of concept
function randomGenDisplay(input) {
    document.getElementById("rreal").textContent = "Real Name: " + input.realName;
    document.getElementById("rhero").textContent = "Hero Name: " + input.heroName;
    document.getElementById("rorigin1").textContent = "Origin 1: " + input.origin1.name;
    if(input.origin2 != undefined) {document.getElementById("rorigin2").textContent = "Origin 2: " + input.origin2.name} else {document.getElementById("rorigin2").textContent = "Origin 2: "};
    document.getElementById("rpower1").textContent = "Power 1: " + input.powers[0].name;
    if(input.powers[1] != undefined) {document.getElementById("rpower2").textContent = "Power 2: " + input.powers[1].name} else {document.getElementById("rpower2").textContent = "Power 2: "};
    if(input.powers[2] != undefined) {document.getElementById("rpower3").textContent = "Power 3: " + input.powers[2].name} else {document.getElementById("rpower3").textContent = "Power 3: "};
    if(input.powers[3] != undefined) {document.getElementById("rpower4").textContent = "Power 4: " + input.powers[3].name} else {document.getElementById("rpower4").textContent = "Power 4: "};
    document.getElementById("ragl").textContent = "AGL: " + input.agl;
    document.getElementById("rcca").textContent = "CCA: " + input.cca;
    document.getElementById("rcnc").textContent = "CNC: " + input.cnc;
    document.getElementById("rcon").textContent = "CON: " + input.con;
    document.getElementById("rdef").textContent = "DEF: " + input.def;
    document.getElementById("rint").textContent = "INT: " + input.int;
    document.getElementById("ritm").textContent = "ITM: " + input.itm;
    document.getElementById("rmen").textContent = "MEN: " + input.men;
    document.getElementById("rper").textContent = "PER: " + input.per;
    document.getElementById("rpot").textContent = "POT: " + input.pot;
    document.getElementById("rrca").textContent = "RCA: " + input.rca;
    document.getElementById("rstr").textContent = "STR: " + input.str;
    document.getElementById("rtwk").textContent = "TWK: " + input.twk;
}

//description functions
function statsDesc(i) {
    if(i==0) {
        document.getElementById("stats-desc").textContent = "";
    }
    else{document.getElementById("stats-desc").textContent = game.descs.statsDescs[i-1]};
}

function originDesc(i) {
    if(i==0) {
        document.getElementById("origin-desc").textContent = "";
    }
    else{document.getElementById("origin-desc").textContent = game.origins[i-1].desc};
}

function powerDesc(i) {
    if(i==0) {
        document.getElementById("powers-desc").textContent = "";
    }
    else{document.getElementById("powers-desc").textContent = game.powers[i-1].desc};
}

function addPowers() {
    for(let i = 0; i<game.powers.length; i++) {
        let powersHtml = document.getElementById("powers-container").innerHTML;
        if(i == 0) {
            powersHtml += "<div class='powers-label'>Body Manipulation</div>";
        } else if (i == 8) {
            powersHtml += "<div class='powers-label'>Body Parts</div>";
        } else if (i == 15) {
            powersHtml += "<div class='powers-label'>Body Transmutation</div>";
        } else if (i == 22) {
            powersHtml += "<div class='powers-label'>Climate Control</div>";
        } else if (i == 28) {
            powersHtml += "<div class='powers-label'>Force Control</div>";
        } else if (i == 44) {
            powersHtml += "<div class='powers-label'>Mastery</div>";
        } else if (i == 53) {
            powersHtml += "<div class='powers-label'>Mind Ability</div>";
        } else if (i == 59) {
            powersHtml += "<div class='powers-label'>Superhuman Ability</div>";
        }
        powersHtml += "<div class='power' id='pow" + (i+1) + "' onclick='pickPower(" + (i+1) + ")' onmouseover='powerDesc(" + (i+1) + ")' onmouseout='powerDesc(0)'>" + game.powers[i].name + "</div>";
        document.getElementById("powers-container").innerHTML = powersHtml;
    }
}

//button functions
function statsPage() {
    document.getElementById("stats-wrapper").style.display = "block";
    document.getElementById("origin-wrapper").style.display = "none";
}

function originPage() {
    document.getElementById("stats-wrapper").style.display = "none";
    document.getElementById("origin-wrapper").style.display = "block";
    document.getElementById("powers-wrapper").style.display = "none";
}

function powersPage() {
    if (!document.getElementById("origin-continue").classList.contains("locked")) {
        document.getElementById("origin-wrapper").style.display = "none";
        document.getElementById("powers-wrapper").style.display = "block";
    }
}

function mainPage() {
    if (!document.getElementById("powers-continue").classList.contains("locked")) {
        document.getElementById("powers-wrapper").style.display = "none";
        document.getElementById("main-wrapper").style.display = "block";
    }
}

function updatePage() {
    document.getElementById("main-wrapper").style.display = "none";
    document.getElementById("update-wrapper").style.display = "block";
}

//gui and loop stuff
function updateGUI() {
    if(document.getElementById("stats-wrapper").style.display == "block") {
    //stats page readouts
        {
            game.player.totalStats = game.player.agl + game.player.cca + game.player.cnc + game.player.con + game.player.def + game.player.int + game.player.men + game.player.per + game.player.pot + game.player.rca + game.player.itm + game.player.str + game.player.twk;
            document.getElementById("total-stats").textContent = "Stat points: " + game.player.totalStats + "/650";

            document.getElementById("agl-read").textContent = "Agility: " + game.player.trueAgl() + "/100";
            document.getElementById("cca-read").textContent = "Close Combat: " + game.player.trueCca() + "/100";
            document.getElementById("cnc-read").textContent = "Concentration: " + game.player.trueCnc() + "/100";
            document.getElementById("con-read").textContent = "Constitution: " + game.player.trueCon() + "/100";
            document.getElementById("def-read").textContent = "Defense: " + game.player.trueDef() + "/100";
            document.getElementById("int-read").textContent = "Intelligence: " + game.player.trueInt() + "/100";
            document.getElementById("men-read").textContent = "Mental State: " + game.player.trueMen() + "/100";
            document.getElementById("per-read").textContent = "Perception: " + game.player.truePer() + "/100";
            document.getElementById("pot-read").textContent = "Potency: " + game.player.truePot() + "/100";
            document.getElementById("rca-read").textContent = "Ranged Combat: " + game.player.trueRca() + "/100";
            document.getElementById("itm-read").textContent = "Intimidation: " + game.player.trueItm() + "/100";
            document.getElementById("str-read").textContent = "Strength: " + game.player.trueStr() + "/100";
            document.getElementById("twk-read").textContent = "Teamwork: " + game.player.trueTwk() + "/100";

        }
    }
    if(document.getElementById("origin-wrapper").style.display == "block") {
        for(let i = 0; i<13; i++){
            if (game.player.origincount > 1) {document.getElementById("or" + (i+1)).classList.add("locked")}
            else if((game.player.origincount == 1) && (game.player.origin1 == game.origins[i])) {document.getElementById("or" + (i+1)).classList.add("locked")}
            else {document.getElementById("or" + (i+1)).classList.remove("locked")};
        }
        if (game.player.origincount < 1) {
            document.getElementById("origin-reset").classList.add("locked");
            document.getElementById("origin-continue").classList.add("locked");
        } else {
            document.getElementById("origin-reset").classList.remove("locked");
            document.getElementById("origin-continue").classList.remove("locked");
        };
        document.getElementById("origins-chosen").innerHTML = "Origins chosen: " + game.player.getOr1Name() + " and " + game.player.getOr2Name() + ".";
    }
    if(document.getElementById("powers-wrapper").style.display == "block") {
        for(let i = 0; i<game.powers.length; i++){
            if (game.player.powers.length > 2) {document.getElementById("pow" + (i+1)).classList.add("locked")}
            else if((game.player.powers.length > 0) && (game.player.powersCheck(game.powers[i]))) {document.getElementById("pow" + (i+1)).classList.add("locked")}
            else {document.getElementById("pow" + (i+1)).classList.remove("locked")};
        }
        if (game.player.powers.length < 1) {
            document.getElementById("powers-reset").classList.add("locked");
            document.getElementById("powers-continue").classList.add("locked");
        } else {
            document.getElementById("powers-reset").classList.remove("locked");
            document.getElementById("powers-continue").classList.remove("locked");
        };
        document.getElementById("powers-chosen").innerHTML = "Powers chosen: " + game.player.getPowName(0) + ", " + game.player.getPowName(1) + ", and " + game.player.getPowName(2) + ".";
    }
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

setInterval(mainLoop, 50);

updateGUI();

addPowers();
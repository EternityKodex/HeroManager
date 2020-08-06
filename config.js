class Hero {
    constructor(rn = null, hn = null, or1 = null, or2 = null, inHp=100, inXp=0, inLv=0, inAgl=50, inCca=50, inCnc=50, inCon=50, inDef=50,inInt=50, inMen=50, inPer=50, inPot=50, inRca=50, inItm=50, inStr=50, inTwk=50) {
        this.realName = rn;
        this.heroName = hn;
        
        this.origin1 = or1;
        this.origin2 = or2;
        this.origincount = 0;

        this.hp=inHp;
        this.xp=inXp;
        this.lv=inLv;

        //base stats
        this.agl=inAgl;
        this.cca=inCca;
        this.cnc=inCnc;
        this.con=inCon;
        this.def=inDef;
        this.int=inInt;
        this.men=inMen;
        this.per=inPer;
        this.pot=inPot;
        this.rca=inRca;
        this.itm=inItm;
        this.str=inStr;
        this.twk=inTwk;

        this.powers=[];

        this.totalStats = this.agl + this.cca + this.cnc + this.con + this.def + this.int + this.men + this.per + this.pot + this.rca + this.itm + this.str + this.twk;
    }

    trueAgl() {
        let outAgl = this.agl;
        if(this.origincount > 0 && (this.origin1.name == "talented" || this.origin2.name == "talented")) {
            outAgl += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("agl");
        }
    
        return outAgl;
    }
    trueCca() {
        let outCca = this.cca;
        if(this.origincount > 0 && (this.origin1.name == "experiment" || this.origin2.name == "experiment")) {
            outCca += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("cca");
        }
    
        return outCca;
    }
    trueCnc() {
        let outCnc = this.cnc;
        if(this.origincount > 0 && (this.origin1.name == "magic" || this.origin2.name == "magic")) {
            outCnc += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("cnc");
        }
    
        return outCnc;
    }
    trueCon() {
        let outCon = this.con;
        if(this.origincount > 0 && (this.origin1.name == "blessed" || this.origin2.name == "blessed")) {
            outCon += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("con");
        }
    
        return outCon;
    }
    trueDef() {
        let outDef = this.def;
        if(this.origincount > 0 && (this.origin1.name == "construct" || this.origin2.name == "construct")) {
            outDef += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("def");
        }
    
        return outDef;
    }
    trueInt() {
        let outInt = this.int;
        if(this.origincount > 0 && (this.origin1.name == "scientist" || this.origin2.name == "scientist")) {
            outInt += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("int");
        }
    
        return outInt;
    }
    trueMen() {
        let outMen = this.men;
        if(this.origincount > 0 && (this.origin1.name == "rich" || this.origin2.name == "rich")) {
            outMen += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("men");
        }
    
        return outMen;
    }
    truePer() {
        let outPer = this.per;
        if(this.origincount > 0 && (this.origin1.name == "technology" || this.origin2.name == "technology")) {
            outPer += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("per");
        }
    
        return outPer;
    }
    truePot() {
        let outPot = this.pot;
        if(this.origincount > 0 && (this.origin1.name == "artifact" || this.origin2.name == "artifact")) {
            outPot += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("pot");
        }
    
        return outPot;
    }
    trueRca() {
        let outRca = this.rca;
        if(this.origincount > 0 && (this.origin1.name == "alien" || this.origin2.name == "alien")) {
            outRca += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("rca");
        }
    
        return outRca;
    }
    trueItm() {
        let outItm = this.itm;
        if(this.origincount > 0 && (this.origin1.name == "genetic" || this.origin2.name == "genetic")) {
            outItm += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("itm");
        }
    
        return outItm;
    }
    trueStr() {
        let outStr = this.str;
        if(this.origincount > 0 && (this.origin1.name == "deity" || this.origin2.name == "deity")) {
            outStr += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("str");
        }
    
        return outStr;
    }
    trueTwk() {
        let outTwk = this.twk;
        if(this.origincount > 0 && (this.origin1.name == "mutated" || this.origin2.name == "mutated")) {
            outTwk += 5;
        }
        for(let i = 0; i<this.powers.length; i++) {
            outAgl *= this.powers[i].call("twk");
        }
    
        return outTwk;
    }

    totalCheck(size) {
        if(size==0) {
            if(this.totalStats + 1 > 650) {
                return false;
            }
            return true;
        } else if (size==1) {
            if(this.totalStats + 10 > 650) {
                return false;
            }
            return true;
        }
    }

    powersCheck(pow) {
        for(let i = 0; i<this.powers.length; i++) {
            if (pow == this.powers[i]) {
                return true;
            }
        }
        return false;
    }

    resetPowers() {
        this.powers = [];
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

    getPowName(i) {
        if(this.powers[i] != null) {
            return this.powers[i].name;
        }
        return "nothing";
    }

    resetStats() {
        this.agl=50;
        this.cca=50;
        this.cnc=50;
        this.con=50;
        this.def=50;
        this.int=50;
        this.men=50;
        this.per=50;
        this.pot=50;
        this.rca=50;
        this.itm=50;
        this.str=50;
        this.twk=50;
    }

    resetOrigins() {
        this.origin1 = null;
        this.origin2 = null;
        this.origincount = 0;
    }
}

class Power {
    constructor(na = "Generic Power", pass = true, st=["NaN"], mu = [1], ef=["NaN"], de="NaN") {
        this.name = na;
        this.passive = pass;
        this.isOn = false;
        this.stat = st;
        this.mult = mu;
        this.effect = ef;
        this.desc = de;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    checkOn() {
        if(this.passive) {
            return true;
        } else if(this.isOn) {
            return true;
        } else {
            return false;
        }
    }

    returnMult(compare) {
        for(let i = 0; i<this.stat.length;i++) {
            if(compare == this.stat[i]) {
                return this.mult[i];
            }
        }
        return 1;
    }

    call(compare) {
        if (this.checkOn()) {
            return this.returnMult(compare);
        } else {
            return 1;
        }
    }
}

function newGame() {
    var out = {
        version: "0.0.0 (Pre-Alpha)",
        gameId: new Date().getTime() + "" + Math.floor(Math.random() * 100000000000),
        origins: [
            {name: 'alien', desc: 'Whether you know it or not, you or your lineage come from a planet or universe that is different from our own. Choosing this origin gives you a small bonus to Ranged Combat Ability.'},
            {name: 'artifact', desc: 'Your abilities come from a strange artifact of mysterious origin and great power. Choosing this origin gives you a small bonus to Potency.'},
            {name: 'blessed', desc: 'Your powers were bestowed upon you by a deity, making you one of their greatest disciples. Choosing this origin gives you a small bonus to Constitution.'},
            {name: 'construct', desc: 'You were not born - you were constructed. Whether android, elemental construct, or something else, you were made by someone. Choosing this origin gives you a small bonus to Defense.'},
            {name: 'deity', desc: 'The power of the gods - or demons - is in your lifeblood. No mortal can stand above you. Choosing this origin gives you a small bonus to Strength.'},
            {name: 'experiment', desc: 'Through some experiment - whether accidentally or intentionally - you were given superhuman powers. Choosing this origin gives you a small bonus to Close Combat Ability.'},
            {name: 'genetic', desc: 'A mutation in your DNA has provided you with great power from birth, though some consider you to be an aberration. Choosing this origin gives you a small bonus to Stealth.'},
            {name: 'magic', desc: 'The universe has provided you with an innate ability to control magical energy. Choosing this origin gives you a small bonus to Concentration.'},
            {name: 'mutated', desc: 'Though you were not born with it, an event in your life caused your DNA to change in miraculous ways. Choosing this origin gives you a small bonus to Teamwork.'},
            {name: 'rich',desc: 'You weren\'t born with special powers, but you don\'t need them with pockets as full as yours. Choosing this origin gives you a small bonus to Mental State.'},
            {name: 'scientist', desc: 'Your ingenuity led to a scientific breakthrough - one that you used to enhance your own abilities. Choosing this origin gives you a small bonus to Intelligence.'},
            {name: 'talented', desc: 'Through years of rigorous training, your talent has come to rival the super-powered abilities of your peers. Choosing this origin gives you a small bonus to Agility.'},
            {name: 'technology', desc: 'You may not be strictly super-powered, but the advanced cybernetics within your body or the high-tech equipment you use make you a threat. Choosing this origin gives you a small bonus to Perception.'}
        ],
        powers: [
            //body manipulation
            new Power("Beast Form", false, ["agl", "cca", "per", "itm", "str"], [1.3,1.3,1.3,1.3,1.3], undefined, "Turn into an animal-like beast."),
            new Power("Density Control", false, ["def"], [1.6], undefined, "Change your body's density."),
            new Power("Growth", false, ["cca","con","str"], [1.3,1.3,1.3], undefined, "Expand your body until it is giant-sized."),
            new Power("Intangibility", false, ["def"], [1.6], undefined, "Become intangible, letting things pass through you."),
            new Power("Invisibility", false, ["agl"], [1.7], undefined, "Become invisible to enemies and allies alike."),
            new Power("Monstrous Form", false, ["cca", "men", "itm", "str", "twk"], [1.5,0.7,1.5,1.5,0.7], undefined, "Turn into a hulking abomination."),
            new Power("Shrinking", false, ["agl"], [1.6], undefined, "Shrink to the size of an insect."),
            new Power("Stretching", false, ["agl"], [1.6], undefined, "Stretch your body in any way you please."),

            //body parts
            new Power("Claws", true, ["cca"], [1.4], undefined, "Your hands have sharp, piercing claws."),
            new Power("Fangs", true, ["cca"], [1.4], undefined, "Your incisors are razor-sharp fangs."),
            new Power("Gills", true, [], [], ["waterbreathing"], "You can breath underwater."),
            new Power("Impenetrable Skin", true, ["def"], [1.4], undefined, "Your skin is rock-hard, providing excellent defense."),
            new Power("Monstrous Appearance", true, ["itm"], [1.4], undefined, "You have the face of a beast, frightening foes."),
            new Power("Suction Hands", true, ["agl"], [1.6], undefined, "You can climb with ease."),
            new Power("Wings", true, ["agl"], [1.4], ["flight"], "Your wings allow you to fly above your enemies."),

            //body transmutation
            new Power("Diamond Form", false, ["def"], [1.6], undefined, "Become an impenetrable diamond."),
            new Power("Fire Form", false, ["cca"], [1.4], ["flight", "fire"], "Become living flame."),
            new Power("Ice Form", false, ["cca"], [1.5], ["freeze"], "Turn your body into living ice."),
            new Power("Metal Form", false, ["cca","str"], [1.4, 1.4], undefined, "Become a living hulk of metal."),
            new Power("Sand Form", false, ["agl"], [1.6], undefined, "Dissolve into sand at will."),
            new Power("Shape-Shift", false, ["agl"], [1.6], undefined, "Change the shape of your body."),
            new Power("Water Form", false, ["agl"], [1.5], ["water"], "Become a living torrent of water."),

            //climate control
            new Power("Cold Control", false, ["rca"], [1.5], ["freeze"], "Freeze your enemies."),
            new Power("Heat Control", false, ["rca"], [1.5], undefined, "Cook enemies alive."),
            new Power("Rain Control", false, ["twk"], [0.7], ["water"], "Conjure localized rain."),
            new Power("Storm Control", false, ["cnc", "twk"], [0.7,0.7], ["water", "electricity"], "Conjure a thunderstorm and control lightning."),
            new Power("Thin Atmosphere", false, ["rca"], [1.1], ["mental", "suffocate"], "Thin the atmosphere around enemies, making them suffocate."),
            new Power("Wind Control", false, ["rca"], [1.5], ["slow"], "Take control of the wind, battering enemies."),

            //force control
            new Power("Electricity Control", false, ["rca"], [1.5], ["electricity"], "Control electricity, which can short out technology."),
            new Power("Eyebeams", false, ["rca"], [1.5], ["fire"], "Beams of energy shoot from your eyes."),
            new Power("Fire Control", false, ["rca"], [1.5], ["fire"], "Control fire, setting your enemies ablaze."),
            new Power("Force Field", false, ["def"], [1.5], ["protected"], "Protect you and your team with a field of energy."),
            new Power("Gravity Manipulation", false, [],[], ["slow", "flight"], "Control gravity fields around you."),
            new Power("Levitation", false, ["agl"], [1.4], ["flight"], "Float above the ground at will."),
            new Power("Magnetism", false, ["rca"], [1.3], ["magnet"], "Control magnetic fields."),
            new Power("Ice Control", false, ["rca"], [1.5], ["freeze"], "Control ice, freezing enemies."),
            new Power("Plant Control", false, [], [], ["slow"], "Control greenery."),
            new Power("Power Absorption", false, [], [], ["absorb"], "Assume the powers of your enemies."),
            new Power("Power Dampening", false, [], [], ["dampen"], "Dampen the effectiveness of enemies' powers"),
            new Power("Sound Blast", false, ["rca"], [1.3], ["deaf", "mental"], "Create an explosion of sound, deafening enmies."),
            new Power("Sound Muffling", false, ["twk"], [0.7], undefined, "Muffle all sound to protect from loud noises."),
            new Power("Teleportation", false, ["agl"], [1.8], ["teleport"], "Bend space to move to a location instantly."),
            new Power("Radiation Control", false, ["rca"], [1.5], ["rads"], "Irradiate enemies."),
            new Power("Vampiric Drain", false, ["rca"], [1.2], ["vampire"], "Steal the health of your foes."),

            //mastery
            new Power("Acrobatics", true, ["agl"], [1.5], undefined, "You are incredibly agile."),
            new Power("Archery Mastery", true, ["rca"], [1.5], undefined, "You have mastered the skill of archery."),
            new Power("Black Belt", true, ["cca"], [1.5], undefined, "You are a master of hand-to-hand combat."),
            new Power("Firearm Expertise", true, ["rca"], [1.5], undefined, "You are an expert in gunplay."),
            new Power("Illusion", false, [], [], ["mental", "illusion"], "Conjure fake images to trick the enemy."),
            new Power("Impersonation", false, ["agl"], [1.5], undefined, "Impersonate a foe or bystander"),
            new Power("Hypnotism", false, [], [], ["hypno"], "Control an enemy through hypnotism."),
            new Power("Tactical Expertise", true, ["per", "twk"], [1.4,1.4], undefined, "You are a tactical genius."),
            new Power("Throwing Mastery", true, ["rca"], [1.5], undefined, "You are a master of throwing weapons like knives and axes."),

            //mind ability
            new Power("Beast Communication", false, [], [], ["commune"], "Speak to animals and convince them to change sides."),
            new Power("Genius", true, ["int", "per"], [1.5,1.5], undefined, "You are incredibly smart."),
            new Power("Precognition", true, ["per"], [1.6], ["predict"], "You know what will happen before it occurs."),
            new Power("Telekinesis", false, [], [], ["telekin"], "Lift enemies and objects with your mind."),
            new Power("Thought Influencing", false, [], [], ["hypno"], "Control an enemy's every thought."),
            new Power("Thought Reading", false, ["per"], [1.6], ["predict"], "Read an enemy's thoughts, knowing what they will do."),

            //superhuman ability
            new Power("Aquatic Ability", false, ["agl", "cnc", "men", "per", "str"], [1.3,1.3,1.3,1.3,1.3], undefined, "You are stronger in water."),
            new Power("Super Durability", true, ["con"], [1.5], undefined, "Your body is able to with stand countless blows."),
            new Power("Super Healing", true, ["con"], [1.4], ["healing"], "You heal incredibly fast."),
            new Power("Super Hearing", true, ["per"], [1.8], undefined, "You hear even the smallest noises."),
            new Power("Super Scream", false, ["rca", "itm"], [1.5,1.5], ["deaf"], "Your screams deafen enemies."),
            new Power("Super Speed", true, ["agl"], [1.8], undefined, "You run unnaturally fast."),
            new Power("Super Strength", true, ["str"], [1.8], undefined, "You are incredibly strong."),
            new Power("Super Vision", true, ["per"], [1.8], undefined, "You can see even tiny insects."),
        ],
        descs: {
            statsDescs: [
                    "Agility (AGL) – evasion, acrobatics, etc.",
                    "Close Combat Ability (CCA) – prowess when using physical attacks.",
                    "Concentration (CNC) – consistency when using superpowers.",
                    "Constitution (CON) – ability to withstand damage taken.",
                    "Defense (DEF) – ability to deflect damage from being taken.",
                    "Intelligence (INT) – tactical proficiency and research ability.",
                    "Mental State (MEN) – current stability.",
                    "Perception (PER) – ability to perceive those using stealth and predict enemy moves.",
                    "Potency (POT) – maximum effectiveness of superpowers.",
                    "Ranged Combat Ability (RCA) – prowess when using ranged attacks.",
                    "Intimidation (ITM) – ability to strike fear into the hearts of enemies.",
                    "Strength (STR) – ability to lift heavy objects and NPCs.",
                    "Teamwork (TWK) – willingness to work in a team and ability to train others."
            ]
        },
        player: new Hero,
        teamMates: []
    }
    return out;
}
game = newGame();
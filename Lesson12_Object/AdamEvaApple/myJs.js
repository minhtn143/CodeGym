class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        this.weight--;
        if (this.isEmpty())
            alert("OUT OF APPLE");
    }

    isEmpty() {
        if (this.weight === 0)
            return true;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name) {
        this.name = name;
        this.gender = true;
        this.weight = "";
    }

    isMale(gender) {
        return gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        return Apple.getWeight();
    }

    eatApple() {
        this.weight++;
    }

    say(str) {
        console.log(this.name+" say: " + str);
    }

    getName() {
        return this.name;
    }

    setName(str) {
        this.name = str;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(int) {
        this.weight = int;
    }
}
let apple = new Apple();
let adam = new Human("Adam");
let eva = new Human("Eva");

adam.setWeight(96);
eva.setWeight(69);
eva.setGender(false);

function check(name,apple) {
    weightChar= name.getWeight();
    qualityApple =name.checkApple(apple);
    alert(name.getName()+"'s weight=" + weightChar+"kg!  Amount of Apple: " + qualityApple)
}

function eatApple(name,apple) {
    name.eatApple();
    apple.decrease();
}

function sayAnything(name) {
    charSay= prompt("say what?");
    name.say(charSay);
}

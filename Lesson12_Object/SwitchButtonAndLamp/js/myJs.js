class ElectricLamp {
    constructor() {
        this.status = false;
    }
    turnOn(){
        this.status=true;
    }
    turnOff(){
        this.status=false;
    }
    checkOnOff(){
        if (this.status)
            console.log("Lamp is ON");
        else
            console.log("Lamp is OFF");
    }
}

class SwitchButton {
    constructor() {
        this.status= false;

    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp;
    }
    switchOff(){
        if (this.lamp.status)
            this.lamp.status=false;
        this.status=false;
    }
    switchOn(){
        if (!this.lamp.status)
            this.lamp.status=true;
        this.status=true;
    }
}

let button1= new SwitchButton();
let lamp1 = new ElectricLamp();
button1.connectToLamp(lamp1);
for (let i=0; i<10; i++){
    button1.switchOn();
    lamp1.checkOnOff();
    button1.switchOff();
    lamp1.checkOnOff();
}


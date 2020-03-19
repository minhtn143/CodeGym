class Mobile{
    constructor(name)
    {
        this.name = name;
        this.battery = 10;     //integer max=100
        this.status = true;       //boolean ON/OFF
        this.message = "";
        this.outbox = [];   //array
        this.draftbox = [];   //array
        this.inbox = [];         //array
    }

        checkStatus(battery){
            if(battery<=0)
                this.status=false;
            return this.status;
        }

        turnOnOff() {
            if(this.status)
                return !this.status;
        }

    writeMessage(value){
        if (this.checkStatus()) {
            this.message = value;
            this.draftbox.push(this.message);
            this.battery--;
        }
        else alert("Out of Battery");
    }

    receiveMgs(mgs){
        if (this.checkStatus(this.battery)){
        this.inbox.push(mgs);
        }
        else alert("Out of Battery");
    }

    sendMessage(mobile) {
        if (this.checkStatus(this.battery)) {
            mobile.receiveMgs(this.message);
            this.outbox.push(this.message);
            this.battery--;
        }
        else alert("Out of Battery");
    };
}

let mobileIphone = new Mobile("Iphone");
let mobileNokia = new Mobile("Nokia");

function sendMessage(m1,m2) {
    m1.sendMessage(m2);
    document.getElementById("iphone-inbox").innerHTML = mobileIphone.inbox;
    document.getElementById("iphone-outbox").innerHTML = mobileIphone.outbox;
    document.getElementById("nokia-inbox").innerHTML = mobileNokia.inbox;
    document.getElementById("nokia-outbox").innerHTML = mobileNokia.outbox;
    console.log(m1.checkStatus());
    console.log(m2.checkStatus());
    console.log(mobileIphone);
    console.log(mobileNokia);
}


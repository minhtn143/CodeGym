function Mobile(battery,draftBox,inBox,sentBox,status) {
    this.battery = battery;     //integer max=100
    this.draftBox = draftBox;   //array
    this.inBox = inBox;         //array
    this.sentBox = sentBox;     //array
    this.status = status;       //boolean ON/OFF

    this.checkStatus =function (battery,status) {
        if(battery=0)
            status=false;
        return status
    }

    this.turnOnOff = function (status) {
        if(status)
            return !status;
    }

    this.charge = function (battery) {
        if(battery<100)
            for (let i=battery;i<=100;i++){
                battery++;
            }
        else
            {alert("Charged 100%")};
        return battery;
    }

    this.writeMessage = function (draft) {

    }




}
//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")


class Car extends VehicleModule {

constructor(make, model, year, color, mileage){

super(make, model, year, color, mileage)

this.maxPassengers = 5
this.passenger = 0
this.numOfWheel = 4
this.maxSpeed = 160
this.fuel = 10
this.Service = false


}



scheduleService() {
    if (this.mileage > 30000) {            
        this.scheduleService = true
        return this.scheduleService;                       
    }
}


Start()  {
    if (this.fuel > 0) {            
        console.log("engine has started.");
        return this.started = true
    } else {
        console.log("no fuel");
        return this.started = false;
    }
}





}









//this shows how to call from this module...
const newCar = new Car('BMW', '540', '2019', 'Red', '1000');
console.log(newCar)

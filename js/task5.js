class Electrical {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    
    // метод, который определяет прибор как включенный в розетку 
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }
    getPowerUsed() {
        return this.isPlugged ? this.power : 0;
    }
} 
  
  const electricKettle = new Electrical('electricKettle', 1500);
  const microwave = new Electrical('microwave', 2500);
  
  console.log(electricKettle.getPowerUsed() + microwave.getPowerUsed());
  
  electricKettle.plugIn();
  console.log(electricKettle.getPowerUsed() + microwave.getPowerUsed());
  
  microwave.plugIn();
  console.log(electricKettle.getPowerUsed() + microwave.getPowerUsed());
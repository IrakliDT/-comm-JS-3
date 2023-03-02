
// ================================ Tesla Info ================================

function Car (make, model, year) {
  return{
    make  : make,
    model : model,
    year  : year,
    displaYinfo : function() {
       document.write(this.model + this.make + this.year);               
    },
    driveCar : function (car){
      document.write(car.name + car.age + this.model + this.make + this.year);
    },

  };
}


function Person (name, age, cars) {
  return{
    name : name,
    age  : age,
    cars : cars,
  };

}

const carInfo = Car (" released In", " Tesla Model S", 2015);
const tom = Person ("Tom is ", 24 , "Tesla Model S")
carInfo.driveCar(tom)



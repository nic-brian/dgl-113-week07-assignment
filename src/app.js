'use strict';

let cars = [];

function setCars(...theCars) {
    cars = [...theCars];
}

class Car {
    // write the code here to complete this class
    // you need:
    // - a constructor that takes 4 parameters:
    //   make, model, distance, and fuel
    // - a fuelEfficiency() method that returns the
    //   fuel efficiency of this car in L/100km
    //   the formula for fuel efficiency is fuel * 100 / distance
    // - a toTableRow() method that returns a string
    //   that is a <tr> element with the make, model,
    //   fuel, distance, and fuel efficiency of this car

}

setCars( 
    new Car( 'Honda', 'Civic', 500, 47 ),
    new Car( 'Ford', 'Ranger', 300, 55 )
 );

let showButton = document.getElementById('show');
showButton.addEventListener('click', showCars );

function showCars(e) {
    let carsBody = document.getElementById('cars');
    for (let i=0; i<cars.length; i++ ) {
        carsBody.innerHTML += cars[i].toTableRow()
    }
}
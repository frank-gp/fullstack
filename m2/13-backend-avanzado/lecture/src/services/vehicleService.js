// src\services\usersService.js

const Vehicle = require("../models/Vehicle");

module.exports = {
  getAllVehicles: async () => {
    const vehicles = await Vehicle.find({});
    return vehicles;
  },

  createVehicle: async (vehicle) => {
    const newVehicle = await Vehicle.create(vehicle);
    return newVehicle;
  },
};
/* 

{
	"patente": "String",
	"marca": "String"
}

*/
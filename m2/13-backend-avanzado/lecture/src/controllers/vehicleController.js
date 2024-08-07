const vehicleService = require("../services/vehicleService");

module.exports = {
  getAllVehicles: async (req, res) => {
    const vehicles = await vehicleService.getAllVehicles();
    res.status(200).json(vehicles);
  },

  createVehicle: async (req, res) => {
    const { patente, marca } = req.body;
    const newVehicle = await vehicleService.createVehicle({ patente, marca });
    res.status(201).json(newVehicle);
  },
};

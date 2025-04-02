import * as controller from "./scripts/controllers/vehicleController.js";


export const loadVehicle = async (vehicleId) => {
  await controller.createDetailsPage(vehicleId)
  };
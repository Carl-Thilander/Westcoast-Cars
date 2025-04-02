export const vehicleList = document.querySelector('#vehicles');
import * as controller from './scripts/controllers/vehicleController.js';


export const loadVehicles = async () => {
  await controller.createGallery();
    
  };
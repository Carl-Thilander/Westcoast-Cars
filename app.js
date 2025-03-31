import { loadVehicle } from "./vehicle.js";
import { loadVehicles } from "./vehicles.js";



const initApp = () => {
  if (location.href.endsWith('gallery.html')) {
    loadVehicles();
  } else if (location.href.includes('vehicle-details.html')) {
    const vehicleId = location.search.split('=')[1];
    loadVehicle(vehicleId);
  }
};

document.addEventListener('DOMContentLoaded', initApp);







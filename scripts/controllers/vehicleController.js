import * as model from '../models/vehicleModel.js';
import { default as vehiclesView, default as vehicleView } from '../views/vehiclesView.js';

export const createGallery = async () => {
    await model.listVehicles();
    vehiclesView.render(model.state.vehicles);
}

export const createDetailsPage = async(id) => {
    await model.findVehicle(id);
    console.log("ctrl",model.state.vehicle);
    vehicleView.render(model.state.vehicle);
}
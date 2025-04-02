export const vehicleImage = document.querySelector('.details img');
export const pageTitle = document.querySelector('.page-title');
export const modelYear = document.querySelector('.info p:first-child');
export const mileage = document.querySelector('.info p:nth-child(2)');
export const price = document.querySelector('.info p:nth-child(3)');
export const description = document.querySelector('.info p:last-child');
import http from "./scripts/httpClient.js";


export const loadVehicle = async (vehicleId) => {
    const client = new http(`vehicles/${vehicleId}`)
    const vehicle = await client.get();


    if (vehicle) {
      pageTitle.innerText = vehicle.manufacturer + ' ' + vehicle.model;
      vehicleImage.src = `./images/${vehicle.imageUrl}`;
      modelYear.innerHTML += ` <span>${vehicle.modelYear}</span>`;
      mileage.innerHTML += ` <span>${vehicle.mileage}</span>`;
      price.innerHTML += ` <span>${vehicle.value}</span>`;
      description.innerHTML += `<br/><span>${vehicle.description}</span>`;
      description.style.textAlign = 'justify';
    }
  };
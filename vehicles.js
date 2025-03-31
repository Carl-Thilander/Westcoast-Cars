export const vehicleList = document.querySelector('#vehicles');
import { get } from "./scripts/httpClient.js";

export const loadVehicles = async () => {
    const vehicles = await get('vehicles')

    console.log(vehicles);
    for (let vehicle of vehicles) {
      const section = document.createElement('section');
      section.classList.add('card');
  
      const image = document.createElement('img');
      image.setAttribute('src', `./images/${vehicle.imageUrl}`);
      image.alt = vehicle.manufacturer;
      image.setAttribute('vehicleId', vehicle.id);
  
      section.appendChild(image);
  
      const info = document.createElement('p');
      info.innerText = vehicle.manufacturer;
  
      section.appendChild(info);
  
      vehicleList.appendChild(section);
    }
  
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        console.log(`Du klickade på ${image.getAttribute('vehicleId')}`);
        location.href =
          './vehicle-details.html?vehicle=' + image.getAttribute('vehicleId');
      });
    });
  };
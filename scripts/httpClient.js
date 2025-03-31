import { Settings } from "./config.js";

export const get = async (endpoint) => {
    try {
        const uri = Settings.api_url + endpoint;
        const response = await fetch (uri);

        if(response.ok){
            const result = await response.json();
            return result;
        }   else {
            throw new Error(`Det gick fel: ${response.status}, ${response.statusText}`)
        }

    } catch (error) {
        throw new Error(error);
    }
}
import axios from 'axios';
const translateCityToLatLong = async (city : string, state : string) : Promise<any> => {
  try {
    const getRequest = await axios.get(`http://localhost:8080/api/location?city=${city}&state=${state}`);
    const {lat , lng} = getRequest.data.geometry;
    const getWeather = await axios.get(`http://localhost:8080/api/weather?lat=${lat}&lon=${lng}`);
    return getWeather.data;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

const funcs = {
  translateCityToLatLong,
}
export default funcs;
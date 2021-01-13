import axios from 'axios';
const translateCityToLatLong = async (city : string, state : string) : Promise<any> => {
  try {
    const getRequest = await axios.get(`http://localhost:8080/api/location?city=${city}&state=${state}`);
    return getRequest;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

const funcs = {
  translateCityToLatLong,
}
export default funcs;
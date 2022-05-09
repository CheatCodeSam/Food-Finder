import axios from "axios"

const fetchFood = async (lat, long) => {
    const response = await axios.get(`api/geofind/?lat=${lat}&long=${long}`)

    return response.data
}

export default fetchFood

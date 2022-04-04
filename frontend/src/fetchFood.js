import axios from "axios"

const fetchFood = async (lat, long) => {
    const response = await axios.get(
        `http://127.0.0.1:8000/geofind/?lat=${lat}&long=${long}`
    )

    return response.data
}

export default fetchFood

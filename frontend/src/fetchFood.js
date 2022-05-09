import axios from "axios"

const fetchFood = async (params) => {
    const response = await axios.get(
        `api/geofind/?${params.lat ? "lat=" + params.lat : ""}${
            params.address ? "&address=" + params.address : ""
        }${params.long ? "&long=" + params.long : ""}${
            params.term ? "&term=" + params.term : ""
        }`
    )

    return response.data
}

export default fetchFood

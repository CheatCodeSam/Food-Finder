import axios from "axios"

const priceVals = ["", "1", "1,2", "1,2,3", "1,2,3,4"]

const fetchFood = async (params) => {
    const response = await axios.get(
        `api/geofind/?${params.lat ? "lat=" + params.lat : ""}${
            params.address ? "&address=" + params.address : ""
        }${params.long ? "&long=" + params.long : ""}${
            params.term ? "&term=" + params.term : ""
        }${params.distance ? "&radius=" + params.distance : ""}${
            params.price ? "&price=" + priceVals[params.price] : ""
        }`
    )

    return response.data
}

export default fetchFood

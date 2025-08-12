import axios from "axios"




const handleGetOperation = async (url) => {
    const result = await axios.get(url, { withCredentials: true })
    console.log(result)
    return result.data

}


const handlePostOperation = async (url, data) => {
    const result = await axios.post(url, data, { withCredentials: true })
    return result.data;
}

export { handleGetOperation }

import axios from "axios"

export const useFetch = async (url, params) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'X-RapidAPI-Key': '6f7895e31dmsh2363e628a248ec3p11768fjsn28652689f78b',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            },
            params: params,
        })
        const data = response.data
        return(data)
    } catch (error) {
        console.log(error)
    }
}
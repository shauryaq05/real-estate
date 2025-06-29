import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



//--header 'x-rapidapi-host: bayut.p.rapidapi.com' 
// 'x-rapidapi-key: f765b5b836msh257775090be5bf2p1386bbjsnc0d109a7ed23




export default fetchApi = async (url) =>
{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f765b5b836msh257775090be5bf2p1386bbjsnc0d109a7ed23'

        }
    })
    return data;
}



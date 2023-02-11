import axios from 'axios';

export const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '62fa1fee21msh4bc8a1d27cfe658p1e531ejsn451642360b8d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchFromAPI;

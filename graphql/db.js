import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

export const getMovies = async (limit, rating) => {
    const result = await axios.get(API_URL);

    return result.data.movies;
};

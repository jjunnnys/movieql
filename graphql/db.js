import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

export const getMovies = async (limit, rating) => {
    let params = {};
    if (limit > 0) {
        params = {
            ...params,
            limit,
        };
    }
    if (rating > 0) {
        params = {
            ...params,
            minimum_rating: rating,
        };
    }

    const result = await axios.get(API_URL, { params });
    const { movies } = result.data.data;

    return movies;
};

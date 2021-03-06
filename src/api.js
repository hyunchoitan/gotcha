import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "f09b332912529f3bec9ce71ff65676a8",
        language: "en-US"
    },
})


export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    topRated: () => api.get("movie/top_rated"),
    movieDetail: (id) => api.get(`movie/${id}`, {params:{
        append_to_response: "videos"
    }}),
    search: (term) => api.get("search/movie", {params:{
        query: encodeURI(term)
    }})
}

export const tvApi = {
    popular : () => api.get("tv/popular"),
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"),
    onTheAir: () => api.get("tv/on_the_air"),
    tvDetail: (id) => api.get(`tv/${id}`, {params:{
        append_to_response: "videos"
    }}),
    search: (term) => api.get("search/tv", {params: {
        query: encodeURI(term)
    }})
}






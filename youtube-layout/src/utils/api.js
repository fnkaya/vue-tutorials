import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db';
const VIDEOS_URL = `${BASE_URL}/videos`;

export const getVideos = () => axios.get(VIDEOS_URL).then(response => response.data);

export const getVideo = (id) => axios.get(`${VIDEOS_URL}/${id}`).then(response => response.data);
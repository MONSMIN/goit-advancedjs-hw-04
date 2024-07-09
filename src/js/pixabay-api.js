import axios from "axios";

const apiKey = '44834874-d7e209ef58742400d75504b10';
const baseUrl = 'https://pixabay.com/api';
const errorMessage = 'Oops! Something went wrong!';


export async function getImages(searchQuery, page, perPage) {
  const {data} = await axios.get(`${baseUrl}/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`);
  return data;
}
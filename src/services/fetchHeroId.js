
import {
  BASE_URL,
} from './urls';

export const getRandomID=(min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default async function fetchHeroId() {
  const randomID = getRandomID(1,731);
  const response = await fetch(`${ BASE_URL }/${randomID}`);
  return response.json()
}

export async function fetchHeroName(name) {
  const response = await fetch(`${ BASE_URL }/search/${ name }`);
  return response.json()
}



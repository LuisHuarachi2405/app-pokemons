import axios from "axios"
import { Ability } from "../models"

const instanceAxios = axios.create({
  baseURL:'https://pokeapi.co/api/v2',
})

export const getPokemons = (id: number) => {
  instanceAxios.get('')
}

export const getAbilities = () => {
  return instanceAxios.get<Ability>('/ability/?limit=20&offset=20')
}
import{type UserType} from '../types/userTypes'

export const myFetch =  async ():Promise<UserType[]> => {
  return await $fetch(`api/data.json`)
}


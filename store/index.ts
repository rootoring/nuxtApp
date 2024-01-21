import { defineStore } from 'pinia'
import {type UserType} from '../types/userTypes'
type State = {
  users:[] | UserType[] 
}

export const useStore = defineStore({
  id: 'Users-store',
  state: ():State => {
    return {
      users:[] 
    }
  },
  actions: {
    async fetchUsers (){
      this.users = await myFetch();
    }
  },

})
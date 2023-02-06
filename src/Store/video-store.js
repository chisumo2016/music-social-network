import { defineStore } from 'pinia'
import axios from "axios";

export const useVideoStore = defineStore('video', {
    state: () => ({
        videos: null,
    }),

    actions: {
        async fetchVideosByUserId(userId){
          let res = await axios.get('http://music-social-network-api.test/api/youtube/' + userId)
            //let res = await axios.get('api/users/' + userId)  //this.$state.id
            this.$state.videos    = res.data.videos_by_user
        },

        clearVideos(){
            this.$state.videos   = null
        }
    },
    persist: true,
})
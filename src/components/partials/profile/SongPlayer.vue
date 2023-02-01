<template>
  <div class="bg-green-500 rounded">
    <div id="aplayer">
    </div>

  </div>
</template>

<script setup>
import APlayer from  'aplayer'
import {onMounted} from "vue";
import 'aplayer/dist/APlayer.min.css';
import {useSongStore} from "@/Store/song-store";

const songStore = useSongStore()
let songsList = []

onMounted(() => {
  mapSongs()
  thePlayer()
})
const thePlayer = () =>{
 new APlayer({
    container: document.getElementById('aplayer'),
    audio: songsList
        //[
      //   {
      //     name: 'First Song',
      //     artist: 'artist',
      //     url: '/music/battle-of-the-dragons-8037.mp3',
      //     cover: 'cover.jpg'
      //   },
      // {
      //   name: 'Second Song',
      //   artist: 'artist',
      //   url: '/music/cinematic-time-lapse-115672.mp3',
      //   cover: 'cover.jpg'
      // },
      // {
      //   name: 'Third Song',
      //   artist: 'artist',
      //   url: '../../../../public/music/cinematic-time-lapse-115672.mp3',
      //   cover: 'cover.jpg'
      // }
    //]
  });
}

const mapSongs = () =>{
  let newSongs = songStore.songs.map(function (song) {
    return {
          name: song.title,
          artist: songStore.artistName,
          url: "http://music-social-network-api.test/" + 'songs/' + songStore.artistId + "/" + song.song
    }
  })
    for (let i = 0; i <newSongs.length ; i++) {
      songsList.push(newSongs[i])
    }
  console.log(newSongs)
}
</script>

<style scoped>

</style>
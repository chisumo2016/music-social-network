### Vue CLI setup with Vue 3 and Tailwind CSS | CDN | Laravel 9 | Laravel API | Pt 3
    - Social Music Nework 
    - Install via CLI 
        vue create music-social-network  
        Select Manually Features
            .Babel
            .Progressive Web App
            .Router
            .Vuex (No Vuex , we gonna use Pinia)
            .CSS - Preprocessor
        Select 3.x Enter
        Usse History Mode for router ?Y 
        Pick a CSS pre-proocessor   ? Sass /SCSS enter
        Pick a linter / formatter config  ? ESLINT with error prevention only entter
        Pick additional lint features ?Lint on save Enter
        Where do you prefer placing config for Babel ESSLint etc? In dedicated config files
        Save this as preset for future projects? N
    Navigate to the folder
            cd music-social-network
            npm run serve
    Instead of  cd in , we can use , root folder
        vue ui
    - Install all the CDN in public/index.html
        font-awesome
        fonts.googleapi
        tailwindcss-elements
        tanimate.css
        font-awesome standard
        cdn.tailwindcss.com
    - Delete the HelloWorld Component
    - Delete the About Component
    - Go to Router Index.js remove the about 
    - Remove the link menu on App.vue

### Tailwind CSS Hero Section with Vue 3
    - Go work on the HomePage 
    - Create a folder called partials insidee the components 
            src/components/partials/HeroSection.vue
                <script setup></script
                <style lang="css"></style>

## Tailwind CSS Register & Login with Vue 3
    - Build the register and login view ass Auth folder
    - Add the router in Router file
    - Design the input with tailwindcsss
    - LoginView.vue
    - RegisterView.vue

## VUE3 REUSABLE INPUT COMPONENT
    - Make the reusable component for input field
    - Create a global folder
            src/components/global/TextInput.vue
    - Copy everything from LoginView.vue
    - In the TextInput.vue , we need to import few things
            defineProps
            defineEmits,
            toRefs
    - Changes
            type="text" =>  type="inputType"
            v-model="inputComputed"
            text-gray-100">First Name</label>
            text-gray-100">{{ label }}</label>

### Vue Router child routes (PROFILE SECTION)
    - Create a Account Folder -> ProfileSection.vue file
    - Make a path with children in the router.js
            No / on child route
    -Create an AccountView.vue file (src/views/AccountView.vue)
    - To create a component for our ProfileSection.vue file
            src/components/partials/profile/ProfileAboutSection.vue
            src/components/partials/profile/ProfileInfoSection.vue
    - Import all above component in the ProfileSection.vue file

### Vue 3 Router Link component
    - Gonna make the edit buutton as commponent , gonna use alot
    - Will be global button component called RouterLinkButton.vue
    - Import on profileSection.vue file

## Install APlayer with Vue 3 and Tailwind CSS (Song Section)
    - Gonna implemennt the song section
    - Copy the ProfileAboutSSection and paste - call SongSection
    - Design with Tailwindcss
    - Import on ProfileSection.vue file
    - Add the play plugin
            https://aplayer.js.org/#/home
            npm install aplayer --save
    - Add the another component called SongPlayer.vue, copy SongSection anad Paste
    - Download mmusic from pixabay.com
    - CCreate a folder called music inside public
    - Import SongPlayer into  songSections.vue file

### Video section with Vue 3 and Tailwind CSS
    - Create a Video Section
    - Take the SongsSection.vue and paste - call YoutubeVideosSection.vue file
    - Import into ProfileSection.vue file
    -Copy the url from youtube annd paste on YoutuubeVideoSection.vue file
            <iframe class="w-full h-60" src="https://www.youtube.com/embed/34nXJ7bd7Ro?autoplay=0" ></iframe>

### 










    
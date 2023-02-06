## Laravel Sanctum with Vue 3 and Axios to login
    - Objective is to hook the frontend with backend 
    - Hook with the front end social media network.
    - Install axios package
            npm i axios     
    - Open the Login view  (LoginView.vue)
    - Implement the all logic  for login which will allow the user to generate a token and user details.
    - Later we will use the pinia  for state management , we need to store this data in local storage
        once we have logged in .

## Pinia Setup in Vue CLI and Vue 3 (LOGIN )
    - Objectives is to  completed the Backend and Front end  to communniicate,by installing Pinia package
        We installed the axios to make a call to laravel backend, login to laravel appliication api,
        We manage to get back the data with token and store it into Pinia state managament.
    - We have alot of to cover here
            Edit Profile Section with Image Cropper.
            Add Songs Section
            Delete Songs Section
            Add Youtube Video Section
            Edit Youtube Video Section
            Create Post Section
            Edit  Post Section
            Post   Section as pagination 
    - Install Pinia so we can save our data in local storage
            https://pinia.vuejs.org/getting-started.html
            npm install pinia
    - Create Store folder, call the file user-store.js
            https://pinia.vuejs.org/introduction.html#basic-example
            Inside the user-store.js fille
                define state
                define actions
    - Install the pinia plugin persistedsate 
        https://github.com/prazdevs/pinia-plugin-persistedstate
                npm i pinia-plugin-persistedstate
    - Add into main.js file     and import all the file from git doc
    -Go back to user-store.js file and persist: true,
    - Open LoginView.vue file
            Implement the logic to logic into the user
    - Once is done ,we can test the application
    - Open login page and put email and password
    - Open network table and Application google chrome
    - TEST PASSED
password1234
## Register user and store in Pinia
    - The objectives of this topic is the same of above.
    - Open the RegsiterView.vue file .
        add the const errors = ref([])
        add the rest of logic inside
        add errors as well
    - Test the application to see if the error is weoking
    - Register the user via F1
    - TEST PASSED
    - Register is working.
    - Add the location column to our user, so open an api netwok of laravel
    - Add the those two fields in backend  and tested 
        AUTHENTICATED COMPLETED 

## Axios and Bearer Token in Vue 3 | Pinia  (Edit Profile)
    - objectives here is communicate with backend using Pinia  so we can edit our profile page.
        Once you fill the page with correct information wee should send ouur token to tthe header as well
    - Open the ProfileEdit.vue page 
        add the all logic into script 
        create a store file src/Store/profile/profile-store.js
    - Test application : FAILED
            Unauthenticated
    - We need to put our bearer token to our header.
            Duplicate mmain.js and call axios.js (src/axios.js) file.
                Write the logic into axios.js file 
            Just back to main.js and import axios (import './axios.js')
            Go back to editProfile.vue and remove the url http://music-social-network-api.test/
                    await.axios.post('users/' + ...... + '?_method=PUT')
    - Inside to our application of Google chrome , wee can see 
            Key                 Value
            user               {id: bvcccfyh}
    - Update the errors message on EditProfile page
    - Tested the error -OK
    - What is remaining is to update the Image.
        In the backend(Laravel) we need to make our image service that we can inject into our user controller
        Then do a bit of depancency Injection upload ouur image .Then on profile page ,we're going to display
        all of our personal information and image.

## Laravel Intervention Image Tutorial (Laravel file Upload)
    - The objectives of this topic is to be able to upload our image to our Edit Page .
    - Let us make our image Service
    - Let us open the laravel backend .
    - app -> create a folder called Services (app/Services/ImageService.php)
    - Install the Laravel Intervention Package
        https://image.intervention.io/v2/introduction/installation#integration-in-laravel
             composer require intervention/image
    - Write all logic to create an image inside the ImageService class
    - To user the  Image Service Open the user Controller in update()
        add the if(){}
    - Just back to our front end application, make some modification to our user function.
    - So open the EditProfile page file.
        To hook thee image from backend with url
        To writee ssome logic to display the user
        PASSED

### Adding Dotenv to Vue CLI
    - The objectivees of this lessonn is to be able to use the env file for our url
    -Install Dotenv
            https://www.npmjs.com/package/dotenv
                npm i dotenv
    - Create a file called .env file inside vue application
        Add the URL for frontend and backend 
        Stop the sserver and restart
    - Go to user_store file  and add logic to use dotenv
    - Download the image from pixabay and call as public/DefaultUserAvatar.png
    - Change the url for axios.js too use the .env
    - The go back to user-store.js file  change as well to use .env 
    - Change in the loginView file to user our .env configuration
    - Change in the RegisterView file to user our .env configuration
    - Change in the EditProfile file to user our .env configuration
        :image="'http://music-social-network-api.test/images/users/' + image"
    -STOP THE SERVER AND RESTART
        PLEASE REVISST
        
## Profile Info with Pinia and Vue 
    - Objective is to make our profile functional for one user.
    - Open the ProfileSection.vue file, display all the informarion on the screen
    - Add the logic to both part to display infoormation ProfileSection.vue and ProfileAboutSSection

### Laravel File Upload with Vue 3 | Axios | Add Song
    - Objective for this section is to be able to add the Songs
    - Functionality to send a request to backend(laravel) via store method.
    - We can get songs by user_id as column
    -Add the Validation
    -State Management to store song
    - Has on the backend of Song we  need to generate model, migration ,  and controller
    - Create a Model , Migration , controller and resource for our songs
        php artisan make:model Song -mc --resource 
    - Add data modelling inside the migration
        php artisan migrate  
    - Put the SongController inside the API 
    - Add Mass Assigment on Song Model
    - Upload the MP3 files as upload  via store() method
    - Make a customs request validation for our song
        php artisan make:request Song/StoreSongRequest 
    - Add the functionality to delete the song
    - Add the api point in api route file (two api route)
    - Add a new folder Songs in public

       FRONT END VUE 
    - Jump to front end of VUE Application
    - Add the SweetAlert
        https://sweetalert2.github.io/#download
          npm  install sweetalert2  
    - Duplicate axios.js file call sweetaler2
    - Copy the import from sweetalert2 doc
    - Open AddSong.vue file and implemennt all the logic
    - Add button will upload the file into public folder to ouur backend.
    - TEST THE APPLICATION - PASSED
    - BUT Sweet alert didnt work

##  Get MP3 Files from Laravel API | Pinia
    - Objective is to get the MP3 file songs by user id 
    - We gonn use the Pinia Store  and stores the song on
    - Make a controller in backend API/SongssByUserController
        php artisan make:controller API/SongssByUserController --resource
        Only one method is needed index(){}
        Implement the logic into index(){} method
    - Api the routes for song by user id
        FRONT END
    - Jump into Front End.
    - Go and  make another store, duplicate the user-store.js file 
    - Call it song-store.js and add the logic into script
    - Go to AddSong.vue Files  and implement the useSongStore
    - TEST THE APPLICATION - PASSED 
    - Open google -application  - All song by id
    - Open SongsSection.vue file  do we can output /loop the songs
    - Open SongPlaye.vue file  do we can output /loop the songs
            add all the logic to loop the songs
    - Save all the image into backend and user pini to show it
    - TEST THE APPLICATION BY ADD NEW SONG  PASSED

### Delete MP3 File from Laravel API and Install SweetAlert2 in Vue 3
    - Objective is to delete the Song from the database and show the SweetAlerts
    - Go to backend  and add the logic to delete (){} in SongController
            Add all logics 
    - Add the API route to delete the songs
    - Open FRONT END Application
    - Open the DeleteSongs vue file

        * Put all logic into script 
    - Loop the in file v-for=""
    - add the useUserStore
    - Add the sweeetAlert2
    - TEST APPLICATION: PASSED
    - Let Go back to AddSong vvue file
        add the redirect to accout-profile
    - Open the SongPlayer ,take the thePlayer() and putt after for loop
    - TEST APPLICATION: PASSED
            SONG SECTION COMPLETED.

## Video display with Vue 3, Pinia, and Laravel API 
    - Object is to be able to display all the video in front end.
    - Copy the song-store.js and save  video-store.js 
        add some fields and method
    - After that open AddYoutubeVideo vue file
        Add logic to add the yuoutube link
    - Add sweetALERT2
    - Add the router for redirectiong the page
    - Add the sweetAlert2 file 
    - Open the YoutubeVideoSection vue file .Purpose is to loop 
        src="https://www.youtube.com/embed/34nXJ7bd7Ro?autoplay=0" 
    - Implement the DeleteVideo  ,open the DeleteYoutube vue file

    VIDEO SECTION FINISH
    
    
## Vue 3 an## Vue 3 and Laravel API CRUD | Laravel CRUD | Posts Section
    - Objectives of this section is to be able to CRUD the Post
    - Create a Model , Migration , controller and resource for our songs
        php artisan make:model Post -mc --resource 
    - Put the VideoController inside the API 
    -Add the Validation request 
        php artissan make:request Post/StorePostRequest      
        php artisan make:request Post/UpdatePostRequest 
    - Inject into PostController in both store and update method
    - Setup the relationship
    - Add the Mass Assigment 
    - Implement all logic for both methods
    - Add the api route for posts
     - Add data modelling inside the migration
        php artisan migrate 
      FINISH THE BACKEND 
   
 ## Create a Post with Vue 3 and Laravel API |Tailwind CSS | Laravel 9 | Vue CLI | Javascript |
    - Objective for this section is to create some post via vue js
    - Copy the code from update from EditProfile.vue file and paste into CreatePost.vue file
    - Amend the logic to reflect what file does
    - Add the SweetAlert msg
    - Add error msessage on UI
    - TEST  APPLICATION PASSED

## Get and Delete with Vue 3 and Laravel API | Vue CLI | Pinia
    - The objective of this lesson is to get individual post by Id and delete the record.
    - Add the endpoint to backend of LAravel  
    - Create a Controller in  backend of LAravel (API/PostByUserController)
        php artisan make:controller API/PostByUserController --resource 
        Delete everything except show method
        Add the api route
    - Jump into Front end.
    - In front end we gonna use the Pinia store to loop all the posts by user id in PostSection.vue
    - Open the PostSection.vue file## Get and Delete with Vue 3 and Laravel API | Vue CLI | Pinia
    - The objective of this lesson is to get individual post by Id and delete the record.
    - Add the endpoint to backend of LAravel  
    - Create a Controller in  backend of LAravel (API/PostByUserController)
        php artisan make:controller API/PostByUserController --resource 
        Delete everything except show method
        Add the api route
    - Jump into Front end.
    - In front end we gonna use the Pinia store to loop all the posts by user id in PostSection.vue
    - Open the PostSection.vue file
        Import all the post by user_id from our Pinia Store
    - Copy the Video-store.js , duplicate and call post-store.js
       Adjust some logic based of file
    - Open the CreatePost.vue file , import  usePostStore and use the variable  postStore to 
       fetch post by userId (fetchPostsByUserId)
    - Open the PostsSections.vue file and import usePostStore and loop through all our posts
    - Attach our image in the Pinia store in order to show our image, open post-store.js
     add the method postImage(){}  implemente the logic
    - Open the PostsSSection.vue file import the method to display the imag.
    - TEST APPLICATION: Image doesn't work
    - Implement the Delete functionality on the Post
    - Copy the code from DeleteYoutube.vue file

## Vue 3 Route Params | Edit Post by Id
    - The objective of this lesson is to edit the post and display on the form once you click Edit button
    - We have already the function on the API.
    - Open the PostsSSection.vue file 
        - add the  params route in router-link
    - Open router.js file 
        {
        path: 'edit-post/:id',
        name: 'EditPost',
        component: EditPost
      },
    - Open the EditPost.vue file
        * Create a function called getPostById()
        * Add all logic inside thee method , get route params from 
        * Copy all the logic from CreatePost.vue file in createPost method and dump into Editpost Vue
        * Add the router and route imprt
       * Change CreatePost into UpdatePost
       * Make Validation for image in createPost.vue

### Post By ID in Vue 3 with Axios and Laravel API
    - The objective of this lesson is to view that post by Id
    -  Open the PostById.vue file
        * Add the logic to getPostById() method
        *  Import route
        * Add the route in router.js   /:id
         {
             path: 'post-by-id/:id',
             name: 'PostById',
             component: PostById
           },
    - Display the image using store ,THIS STILL THE PROBLEM

## Vue 3 Pagination with Laravel API and Tailwind CSS 
    - The objective of this lesson is to show the pagination on the Blog Post and spit all the posts from all users
   
    - Copy the all PostById page vue file paste into postSection.vue file
    - add the id to reference 
    - Spitt out all the post with from all the  users by linking to index() in API
    - TESTED APPLICATION PASSED  . IMAGE PROBLEM
    - Install the Pagination package.
                npm i @hennge/vue3-pagination
            * Import  that package into PostsSection.vue file
              import VPagination from "@hennge/vue3-pagination";
              import "@hennge/vue3-pagination/dist/vue3-pagination.css";
    - Add the logic to display all posts 
    - Implement the logic for paginate
    - TESTED APPLICATION PASSED - IMAGE NO

## Build a Pinia Store in Vue 3 with Tailwind CSS | Profile Section
    - The objective of this lesson is to make our application to use Multi user rather than single user.
    - We gonna makee the Pinia store and change some logic
    - We gonna duplicate the user-store.js and call profile-store.js
        * Remove token 
        * Remove setUserDetails() method
        * Remove fetchProfileById() method
        * Change into useprofileStore
        *
    - Open router.js file and change 
          {
        path: 'profile',
        name: 'ProfileSection',
        component: ProfileSection
      }, 
      {
        path: 'profile/:id',
        name: 'ProfileSection',
        component: ProfileSection
       }, }, 
    - Open the ProfileSection.vue file
          * add const profileStore = useProfileStore()
          * add unMounted()
      
     - We're going to chhange the varioble to use profileStore
       {{userStore.firsName }} {{userStore.lastName }}
       {{profileStore.firsName }} {{profileStore.lastName }}
     - Add v-if inside the profileSection
     - Open the ProfileAboutSection.vue file change to user profileStore
     - Open the SongstSection.vue file change to user userStore
          * Add this const userStore = useUserStore()
          * Add this route params and import
    - Open the YoutubeSection.vue file change to user userStore
          * Add this const userStore = useUserStore()
          * Add this route params and import
    - Open the PostsSection.vue file change to user userStore
          * Add this const userStore = useUserStore()
          * Add this route params and import

## Register & Login with Pinia and Vue 3
    - Obective of this lesson is to use mult Authication sys with vue , we made some modification
      from single to multiple user .userStore to profileStore
    - Open the LoginView.vue file
         * Bring in all our stores
              useProfileStore
              useSongStore
              usePostStore
              useVideoStore
    - Open the RegisterView.vue file
            useProfileStore
              useSongStore
              usePostStore
              useVideoStore

## Register & Login with Pinia and Vue 3
    - Obective of this lesson is to use Authentication guard, which is middleware
    - Open the FullScreenModal vvue file
         Make a logout funnctionality
    - Add middlware in index.js
          beforeEnter:(to, from , next) =>{
         useUserStore().id ? next() : next('/login')
       },
    - Added the TopNavigation  one Login andd Registeer vue

## Final video and clean up
    







    













        
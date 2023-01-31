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













        
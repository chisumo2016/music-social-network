## Laravel Sanctum with Vue 3 and Axios to login
    - Objective is to hook the frontend with backend 
    - Hook with the front end social media network.
    - Install axios package
            npm i axios     
    - Open the Login view  (LoginView.vue)
    - Implement the all logic  for login which will allow the user to generate a token and user details.
    - Later we will use the pinia  for state management , we need to store this data in local storage
        once we have logged in .

## Pinia Setup in Vue CLI and Vue 3
    - Objectives is to  completed the Backend and Front end  to communniicate
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
        
        
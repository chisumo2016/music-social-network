### Tailwind CSS Forms in Vue 3 and Laravel 9 (EDIT PROFILE)
    - We gonna implement the edit page ,
    - Couple of Innputs andd Cropal Model
    - Copy the ProfileSeection.vue and save as  EditProfile.vue
    - Design UI
    - Add the router in index.js
                {
                    path: 'edit-profile',
                    name: 'EditProfile',
                    component: EditProfile
                  }
    - We gonna create few components eg .Cropper Button , Textarea Commponent , Submit form button .
    - Copy the RouterLinkButton.vue and name as DisplayCropperButton.vuee
            Change the router-link to button
            we remove the  :class
            we remove the  :to="url" to @click="$emit('')"
    - Import into the EditProfile.vue file the DisplayCropperButton
    - Copy the DisplayCropperButton and name as TextArea.vue
        -Get rid of button ,replace with textArea
    - Import into EditProfile.vue file the TextArea.vue commponent
    - Make a Buttoon to submit the form
    - Copy the RouterLinkButton and save as SubmitFormButton.vue
            remove the :class=""
            remove the :to=""
            change roueter-link into button
    - Import into EditProfile.vue file the SubmitFormButton commponent

### Tailwind CSS Modal Cropper with Vue 3
    - Create a Cropper Modal
    - Copy the DisplayCropperButton.vue save as CropperModal.vue
    - Create a Modal with Tailwindcss , design
    - Modal Footer Button with Tailwindcss
    -Install Cropper and Setup
            https://www.npmjs.com/package/vue-advanced-cropper
    - Write the logic to upload the file 
            src="https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg" TO
            :src=""
    - Let make the crop function , that emits the cropss data out of the component
    - Add the model in EditProfile.vue
    - Create CroppedImage vue component, copying from TextInput.vue
    - import to the EditProfile Vue file.

### Tailwind CSS Forms with Vue 3 (ADD AND DELETE SONGS)
    - Add New Songs Delete  Songs  objectives
    - Create  new file in account folder - AddSongs.vue
    - Add the routes in Router/index.js
    -Go to  editProfile.vue , copy from it 
    - Steel some input from editProofile
    - Steel some label from CropperModal
    -Import the SubmitFormButton and add on song
    - Implement the UI for Deelete Songs
        add routeto deelete songs in router/index.js
    - Copy the AddSong and call DeleteSong.vue
    - Build the UI 

### Tailwind CSS Forms with Vue 3 (Add & Delete Videos )
    - Add New &  Delete  Videos as  objectives to this page
    - Create  new file in account folder - AddVideo.vue
    - Add the routes in Router/index.js
    -Go to  editProfile.vue , copy from it 
    - Steel some input from AddSong.vue
    -Import the SubmitFormButton and add on video
    - Implement the UI for Delete Songs
        add route delete songs in router/index.js
    - Copy the DeleteSong and  call DeleteYouVideo.vue
    - Build the UI 
            
### Tailwind CSS Forms with Vue 3  (Create & Edit Posts)
    - Objectives is to CREATE & Edit the Post 
    - Add route create Post and Delete Post in router/index.js
    - Duplicated tthe EditProfile.vue call EditPost.vue
    - Duplicated tthe EditPost.vue call CreatePost.vue
    - Change field name in the CreatePost
    - Copy the CreatePost code and Paste into EditPost.vue
            Adjust some few thingss inside both page 

### Tailwind CSS Blog with Vue 3 (Posts & Post By ID)
    - Objectives is to make a post sections
    - create a new page called postsSection.vue inside the account
            - Still some ui from AddSong to add the HEADER
    - Add the router/index.js routes
    -Continue building the UI of postsSection.vue page
    -Dupliccated  postsSection.vue page  call PostById.vue
    - Add the router/index.js routes for postById
    - Go to FullScreenModal.vue  add the RouterLinkButton (MENU OR NAVVIGATION)
                 <RouterLinkButton
                    @click="open = !open"
                    class="w-full text-gray-100 text-center text-lg"
                    btnText="Posts"
                    color="green"
                    url="/account/posts"
                />
    - TEST THE APPLICATION - PASSED
    
        END OF PART 1 - FRONT END WITH VUE 3
        
    
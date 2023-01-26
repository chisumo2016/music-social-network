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
        add routeto deelete songs in router/index.js
    - Copy the DeleteSongand call DeleteVideo.vue
    - Build the UI 
            


    
        
    
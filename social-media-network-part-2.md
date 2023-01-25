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
    - Create CroppedImage vue component, copying TextInput.vue
        
    
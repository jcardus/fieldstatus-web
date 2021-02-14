<template>
<div id="firebaseLogin">
</div>
</template>



<script>

import * as firebaseui from 'firebaseui'
import firebase from 'firebase/app'

export default {
  name: "login",
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult (/* authResult, redirectUrl */) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true
        },
        uiShown () {
          // The widget is rendered.
          // Hide the loader.
          //document.getElementById('loader').style.display = 'none'
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: 'apple.com',
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>'
    }
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseLogin', uiConfig)
  }
}
</script>

<style scoped>

</style>

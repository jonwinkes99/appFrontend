import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDq7MXSPVNNFhfxdX8b3ul8y19FRt1aaNg",
    authDomain: "portfolio1-f1d31.firebaseapp.com",
    databaseURL: "https://portfolio1-f1d31.firebaseio.com",
    projectId: "portfolio1-f1d31",
    storageBucket: "portfolio1-f1d31.appspot.com",
    messagingSenderId: "631922673099",
    appId: "1:631922673099:web:7e865c07024bbbab55a24e"
  };
  const fire = firebase.initializeApp(config)
  export default fire;
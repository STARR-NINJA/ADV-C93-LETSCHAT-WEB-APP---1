// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-bPtoGyWRaRcjkdzxM8jBjnj8jZPbFcc",
    authDomain: "testbase1-1b857.firebaseapp.com",
    projectId: "testbase1-1b857",
    storageBucket: "testbase1-1b857.appspot.com",
    messagingSenderId: "708445488419",
    appId: "1:708445488419:web:be3f76006a3601d7247896"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
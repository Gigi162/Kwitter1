
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAOoHtvupTh-8K4xe-VeS5HaolI-Nw3ZLE",
      authDomain: "kwitterbase.firebaseapp.com",
      databaseURL: "https://kwitterbase.firebaseio.com",
      projectId: "kwitterbase",
      storageBucket: "kwitterbase.appspot.com",
      messagingSenderId: "868006231969",
      appId: "1:868006231969:web:aa07022b85e5f121bd55e0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

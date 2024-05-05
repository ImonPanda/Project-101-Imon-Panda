// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA6pnJmmuXoJ3IhNP1_sTeOtxn2hjMYpm8",
    authDomain: "lets-chat-web-app-4f27c.firebaseapp.com",
    projectId: "lets-chat-web-app-4f27c",
    storageBucket: "lets-chat-web-app-4f27c.appspot.com",
    messagingSenderId: "835991081105",
    appId: "1:835991081105:web:01bdcc38e77b988e3e2f30",
    measurementId: "G-QP9GR3QJPZ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




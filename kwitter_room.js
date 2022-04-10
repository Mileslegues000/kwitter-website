

const firebaseConfig = {
  apiKey: "AIzaSyAIEMenG9rgqra57N4ekZHopzh6dkaRCFE",
  authDomain: "kwitter-419ec.firebaseapp.com",
  databaseURL: "https://kwitter-419ec-default-rtdb.firebaseio.com",
  projectId: "kwitter-419ec",
  storageBucket: "kwitter-419ec.appspot.com",
  messagingSenderId: "854665629215",
  appId: "1:854665629215:web:049772634781bee29a8f2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("username");
    
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names );
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{ localStorage.removeItem("room_name");
localStorage.removeItem("username");
      window.location="index.html";
}

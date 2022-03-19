//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
          });
           document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];

      name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
      msg_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

      row=name_with_tag+msg_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout()
{ localStorage.removeItem("room_name");
localStorage.removeItem("username");
      window.location="index.html";
}

function updateLike(message_id) {
      console.log("clicked on the like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_like=Number(likes)+1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}


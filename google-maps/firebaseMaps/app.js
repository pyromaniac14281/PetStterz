(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyAznp5IiRCExfYhahEoU7S63ZaeoPjlnG0",
        authDomain: "gtcbc-coding.firebaseapp.com",
        databaseURL: "https://gtcbc-coding.firebaseio.com",
        projectId: "gtcbc-coding",
        storageBucket: "gtcbc-coding.appspot.com",
        messagingSenderId: "46793546586",
        appId: "1:46793546586:web:aefd434c3440f704"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      const preObject = document.getElementById("person");

      const dbRefObject = firebase.database().ref().child("person");

      dbRefObject.on('value', snap => console.log(snap.val()));

      

}());
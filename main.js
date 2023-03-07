//extraer datos
//alert("hola")
const firebase = require("firebase");
//require("firebase/firestore");

const firebaseConfig = {
          apiKey: "AIzaSyAYfWt4oqWU9rJU43fpEamGs3TgARPHgK0",
          authDomain: "prueba-9aedb.firebaseapp.com",
          databaseURL: "https://prueba-9aedb-default-rtdb.firebaseio.com",
          projectId: "prueba-9aedb",
          storageBucket: "prueba-9aedb.appspot.com",
          messagingSenderId: "647554982451",
          appId: "1:647554982451:web:13d896cc01a81eca367946",
          measurementId: "G-8FJG6GN481"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore and get a reference to the service
const db = firebase.firestore();


//tiempo real
db.collection("Azteca7").doc("20230206").collection("archivos").doc("UPmohrW3YHwR13DcRbA2")
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });


//varios documentos de una coleccion
// db.collection("Azteca7").doc("20230206").collection("archivos").where("Fecha", "==", "230206")
//     .onSnapshot((querySnapshot) => {
//         var cities = [];
//         querySnapshot.forEach((doc) => {
//             cities.push(doc.data().name);
//         });
//         console.log("Current data: ", cities.join(", "));
//     });

//Escucha los cambios de una coleccion
db.collection("Azteca7").doc("20230206").collection("archivos").where("Fecha", "==", "230206")
.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New data: ", change.doc.data());
        }
        if (change.type === "modified") {
            console.log("Modified data: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed data: ", change.doc.data());
        }
    });
});

//document.body.innerHTML = "<h1>Current data: " + doc.data() + "</h1>";
//document.write(doc.data());

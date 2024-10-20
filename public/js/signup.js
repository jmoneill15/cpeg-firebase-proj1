/*import './firebase.js';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, child, get, push, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDR-KgyPWiGSM7kz2dioVVWlFZO1g35SvE",
    authDomain: "cpeg470-proj1-2b1ec.firebaseapp.com",
    databaseURL: "https://cpeg470-proj1-2b1ec-default-rtdb.firebaseio.com",
    projectId: "cpeg470-proj1-2b1ec",
    storageBucket: "cpeg470-proj1-2b1ec.appspot.com",
    messagingSenderId: "900830850408",
    appId: "1:900830850408:web:f47604d97db5457b5c3add",
    measurementId: "G-N41B7W2X03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let usernameInput = document.getElementById("usernameInput");
let passwordInput1 = document.getElementById("passwordInput1");
let passwordInput2 = document.getElementById("passwordInput2");
let submitButton = document.getElementById("submitButton");

//const newUserKey = push(child(ref(db), 'users')).key;

/*
        function AddData (){
            if (passwordInput1.value === passwordInput1.value){
                set(ref (db, "users/" + newUserKey),{
                    username: usernameInput.value,
                    password: passwordInput1.value, 
                    id: newUserKey,
                }).then(()=> {
                    alert("Account Created Successfully");
            }).catch(()=>{
                console.log(error);
            })
            }
            else{
                alert("Passwords do not match");
            }
        }
*/
/*
function AddData() {
    console.log("starting add data");
    set(ref(db, "users/"), {
        username: usernameInput.value,
        password: passwordInput1.value,
        //id: newUserKey,
    }).then(() => {
        alert("Account Created Successfully");
    }).catch(() => {
        console.log(error);
    })
}

function RetrieveData(userKey) {
    const dbRef = ref(db);

    get(child(dbRef, "users/" + userKey)).then((snapshot) => {
        if (snapshot.exists()) {
            usernameInput.value = snapshot.val().username;
            passwordInput1.value = snapshot.val().password;
            //newUserKey = snapshot.val().id;
        }
        else {
            alert("Account does not exist");
        }
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
}

submitButton.addEventListener('click', AddData);





export { }; */
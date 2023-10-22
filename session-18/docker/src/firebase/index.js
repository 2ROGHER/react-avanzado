// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';
// Ek par de claves
const vapidKey = "BBu4IFXfcIlz5ga85y93urmTdJgim5fFxF20vOUk2Q0bU7WVdOsDdZxOvyD3IhMURi1jnAm6QgzvQUUAVbxzX6o";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyuQ6jW8X0ZFeXjwRFilcFejZR8v0oo8s",
    authDomain: "fir-shoping-80655.firebaseapp.com",
    projectId: "fir-shoping-80655",
    storageBucket: "fir-shoping-80655.appspot.com",
    messagingSenderId: "656535222816",
    appId: "1:656535222816:web:2728177602d7cb271f1a45"
};

// Initialize Firebase
// Se exporta esta constante para que se pueda usar en todo el proyecto
export const app = initializeApp(firebaseConfig);

//Obtenemos el messaging
export const messaging = getMessaging();

// current token : 'https://th.bing.com/th/id/R.72e2383986163486f071ea134f97c707?rik=oXJXeTWS%2f40yNA&pid=ImgRaw&r=0'

// Obtenemos el token de messagin para enviar las notificaciones al cliente.
getToken(messaging, { vapidKey })
    .then(token => {
        if(token) {
            // Send your token to your server and update the UI if necesary
            //...
            console.log('Current token', token);
            // send token to serer solo se `hace una vez por cliente`
            sendTokenToServer(token);
        } else {
            console.log('No registration token available');
        }
    })
    .catch(err => console.log(err));

const sendTokenToServer = (token) => {
    // solo se tiene que enviar uno y solo un token al servidor por cliente
    if(localStorage.getItem('tokenToServer')) return 'Ya tiene el token almacenado';
    // implementar la logia en el servidor para almacenar el token
    console.log('Ha almacenado el token');
    localStorage.setItem('tokenToServer', token);
};

// creamos la instancia de nuestra base de datos al cual podemos ingresar y trabajar con el
export const db = getFirestore();
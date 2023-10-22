// configurar nuestro poopio y el primer service worker para el proyecto
//importar los archivos de firebase y messagin
// Estas son las configuraciones para recibir las notificaciones

importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Inicializamos la aplicaion que se copia del archivo ./firebase/index.js - con las mismas credentials
firebase.initializeApp({
    apiKey: "AIzaSyAyuQ6jW8X0ZFeXjwRFilcFejZR8v0oo8s",
    authDomain: "fir-shoping-80655.firebaseapp.com",
    projectId: "fir-shoping-80655",
    storageBucket: "fir-shoping-80655.appspot.com",
    messagingSenderId: "656535222816",
    appId: "1:656535222816:web:2728177602d7cb271f1a45"
});

const messaging = firebase.messaging();

// Los service workers son eventos que estan escuchando dentro de nuestro sistma.
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'new title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
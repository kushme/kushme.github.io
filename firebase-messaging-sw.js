importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");
firebase.initializeApp({
   apiKey: "AIzaSyC3gV7Lne5Ycv40aEwL_SWrr_Eqv4cgmOw",
       authDomain: "travel-union-2a15d.firebaseapp.com",
       projectId: "travel-union-2a15d",
       storageBucket: "travel-union-2a15d.appspot.com",
       messagingSenderId: "469372522467",
       appId: "1:469372522467:web:31a66a92667a82cbf4dad6",
       measurementId: "G-J2GVZ9QDJG"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});
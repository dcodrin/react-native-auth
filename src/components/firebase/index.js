import firebase from 'firebase';

try {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyADHqrDl-zPFp8BsQaE-T1m-jEfKHapdy8",
        authDomain: "react-native-auth-368a6.firebaseapp.com",
        databaseURL: "https://react-native-auth-368a6.firebaseio.com",
        storageBucket: "",
    };

    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;

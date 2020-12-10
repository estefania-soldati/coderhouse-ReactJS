import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
	{
    apiKey: "AIzaSyAEAbHR2wroBPJ8j41oSHQGsc7EgjcYsFI",
    authDomain: "coderhouse-ecommerce-f4aa6.firebaseapp.com",
    projectId: "coderhouse-ecommerce-f4aa6",
    storageBucket: "coderhouse-ecommerce-f4aa6.appspot.com",
    messagingSenderId: "977355484609",
    appId: "1:977355484609:web:58903f207c389a4b5c1340",
    measurementId: "G-J2PSXCT7QD"
  }
);

export const getFirebase = () =>{
	return app;
};

// para llamar a la DB
export const getFirestore = () =>{
	// se exporta la funcionalidad se va a usar de firebase (recordar importarlo arriba de todo)
	// otro ej seria:
	// return firebase.auth();
	return firebase.firestore();
};
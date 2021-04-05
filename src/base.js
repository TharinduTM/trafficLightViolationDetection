import firebase from 'firebase'
import 'firebase/storage'

export const ba = firebase.initializeApp({
    "projectId": "trafficlightviolatedetectionsl",
    "appId": "1:546236283537:web:75faf1b9c6e69406e21d30",
    "databaseURL": "https://trafficlightviolatedetectionsl-default-rtdb.firebaseio.com",
    "storageBucket": "trafficlightviolatedetectionsl.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAKLz8ZRgDAbSl2P824j-95zLS945K37dc",
    "authDomain": "trafficlightviolatedetectionsl.firebaseapp.com",
    "messagingSenderId": "546236283537"
  });
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAKLz8ZRgDAbSl2P824j-95zLS945K37dc",
  authDomain: "trafficlightviolatedetectionsl.firebaseapp.com",
  projectId: "trafficlightviolatedetectionsl",
  storageBucket: "trafficlightviolatedetectionsl.appspot.com",
  messagingSenderId: "546236283537",
  appId: "1:546236283537:web:29b580a6637867ade21d30"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
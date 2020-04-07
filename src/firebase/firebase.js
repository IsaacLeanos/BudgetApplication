import * as firebase from'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://expensify-d7634.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config)
  const database=firebase.database()
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider()

  export{firebase,googleAuthProvider,database as default}






//   database.ref().set({
//     name:'Isaac Leanos',
//     age:22,
//     location:{
//         city:'Clovis',
//         state:'California'
//     }
//   })

//   database.ref('attributes').set({
//       height:'73',
//       weight:'130'
//   })

//   database.ref('attributes').on('child_changed',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val())
//   })
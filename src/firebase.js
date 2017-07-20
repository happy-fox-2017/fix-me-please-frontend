import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBqyuyv9cLau8z4pv6U_FDJvf2sR11PlDc',
  databaseURL: 'https://progressive-tamvan.firebaseio.com',
  projectId: 'progressive-tamvan'
}

export const firebaseApp = firebase.initializeApp(config)

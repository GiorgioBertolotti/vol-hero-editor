import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDN1aIlXgi8MZguO_EgHqnmQj314-3STC0',
  authDomain: 'village-of-legends-hero-editor.firebaseapp.com',
  projectId: 'village-of-legends-hero-editor',
  storageBucket: 'village-of-legends-hero-editor.appspot.com',
  messagingSenderId: '360688424446',
  appId: '1:360688424446:web:7e39b176bbd2230a4fdcaf',
  measurementId: 'G-HR2GK8TPFW',
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig} databaseURL="">
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  )
}

export default MyApp

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.APIKEY || process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.AUTHDOMAIN || process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.PROJECTID || process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket:
		process.env.STORAGEBUCKET || process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId:
		process.env.MESSAGINGSENDERID || process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.APPID || process.env.NEXT_PUBLIC_APPID
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }

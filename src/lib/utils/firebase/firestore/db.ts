import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import config from '../config';

const app = initializeApp(config);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
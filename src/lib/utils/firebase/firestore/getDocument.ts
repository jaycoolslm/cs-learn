import db from "./db";
import { doc, getDoc } from 'firebase/firestore'
import type { DocumentData } from "firebase/firestore";



export default async (collectionName: string, id: string): Promise<DocumentData> => {
    const docSnap = await getDoc(doc(db, collectionName, id))
    if (docSnap.exists()) {
        const document = docSnap.data()
        return document
    } else {
        throw new Error("Document doesn't exist")
    }
}
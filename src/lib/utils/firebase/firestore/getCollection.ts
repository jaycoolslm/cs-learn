import db from "./db";
import { collection, getDocs } from 'firebase/firestore'
import type { DocumentData } from "firebase/firestore";

interface CollectionData {
    data: DocumentData,
    id: string
}

export default async (collectionName: string): Promise<CollectionData[]> => {
    let array: CollectionData[] = []
    const querySnapshot = await getDocs(collection(db, collectionName))
    querySnapshot.forEach(doc => {
        array.push({
            data: doc.data(),
            id: doc.id
        })
    })

    return array
}
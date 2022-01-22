import { db } from "@/firebase";
import { arrayUnion, doc, onSnapshot } from "firebase/firestore";
import COLLECTIONS from "@/firestore/collections";

export const createSession = async (title) => {
    const sessionRef = await db.collection(COLLECTIONS.session).add({ title });
    return sessionRef.id;
}

export const addQuestion = async (sessionId, question) => {
    await db.collection(COLLECTIONS.session)
        .doc(sessionId)
        .update({ questions: arrayUnion(question) });
}

export const listenDataChanges = (sessionId, callback) => {
    onSnapshot(doc(db, COLLECTIONS.session, sessionId), doc => {
        callback(doc.data());
    });
}
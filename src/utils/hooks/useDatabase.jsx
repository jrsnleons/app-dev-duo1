import { db } from "../database";
import { collection, doc, getDoc, getDocs, addDoc, query, orderBy, limit, where } from "firebase/firestore";

export default function useDatabase() {
    async function getData(colName, docID){
        const docRef = doc(db, colName, docID);
        const data = await getDoc(docRef);

        return data.data();
    }

    async function getAllData(colName) {
        const q = query(collection(db, colName), orderBy('createdAt', 'desc'), limit(10));
        const data = await getDocs(q);
        const arr =[];

        data.forEach((doc) => {
            arr.push(doc.data());
        })

        return arr;
    }

    async function getAllDataWhere(colName, field, condition, compared){
        const q = query(collection(db,colName), orderBy('createdAt', 'desc'), limit(10), where(field, condition, compared));
        const data = await getDocs(q);
        const arr =[];

        data.forEach((doc) => {
            arr.push(doc.data());
        })
        return arr;
    }

    async function addPost(data){
        const colRef = collection(db, 'posts');
        await addDoc(colRef, data);
    }

    return {getData, getAllData, addPost, getAllDataWhere};
}

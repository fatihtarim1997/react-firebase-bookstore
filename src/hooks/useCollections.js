import { useState,useEffect,useRef } from "react";

import { db } from "../firebase/config";
import { collection, onSnapshot,query,where } from "firebase/firestore";

export const useCollections = (collectionName,_q) => {
    const [docs, setDocs] = useState(null);
    const q = useRef(_q).current
 useEffect(() => {
    let ref = collection(db, collectionName);
    if(q){
        ref = query(ref,where(...q))
    }
    const unsub= onSnapshot(ref, (snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
            result.push({ ...doc.data(), id: doc.id });
        });
        setDocs(result);
    },err=>{console.log(err)});
    return ()=>unsub();
 }, [collectionName,q]);
    return { docs };
}
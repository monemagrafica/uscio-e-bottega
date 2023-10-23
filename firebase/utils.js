/**
 * Funzione asincrona che permette di recuperare i dati da Firebase
 *
 * @description utilizzata per le getServersideProps nelle pagine
 *
 * @date 16/10/2023 - 17:14:20
 * @param collectionName - Tipo di collezione da cui recuperare i dati
 * @returns {array} - Array di oggetti contenenti i dati recuperati
 *
 * */

import { firestore } from "./initFirebase";
import { collection, getDocs } from "firebase/firestore";

const fetchDataFromFirebase = async (collectionName) => {
  const collectionFromFirebase = collection(firestore, collectionName);
  const g = await getDocs(collectionFromFirebase);

  return g.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { fetchDataFromFirebase };

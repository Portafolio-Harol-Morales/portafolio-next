import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const getCollectionData = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return dataList;
  } catch (error) {
    console.error("Error fetching collection: ", error);
    throw error;
  }
};

export {
    getCollectionData
} ;

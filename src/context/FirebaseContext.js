import React, {useState, useEffect} from 'react';
import { getFirestore } from '../firebase';

export const FirebaseContext = React.createContext();

export const FirebaseProvider = ({children}) => {

  const [products, setProducts] = useState();

  const [db, setDb] = useState();

  useEffect(() => {

    const db = getFirestore();
    setDb(db);
    
    const itemCollection = db.collection('products');

    itemCollection.get().then((response)=>{
      const aux = response.docs.map(element => {
        return { id: element.id, ...element.data() };
      });
      setProducts(aux);
    });

  }, []);

  return <FirebaseContext.Provider value={{products,db}} >
    {children}
  </FirebaseContext.Provider>
}
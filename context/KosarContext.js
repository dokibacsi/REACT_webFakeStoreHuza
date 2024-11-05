import { createContext, useState } from "react";
import { kosarLista, termekLista } from "../datas";

export const KosarContext = createContext("");

export const KosarProvider = ({children}) => {
    
    const [kList, setList] = useState(kosarLista)
    const [tList] = useState(termekLista)
  
    function athelyez(termek) {
      const ujKosarList = [...kList]
      console.log(ujKosarList)
      console.log(termek)
      let hunci = 0
      while(hunci < ujKosarList.length && ujKosarList[hunci].kategoria !== termek.kategoria){
        hunci++
      }
      if(hunci < ujKosarList.length){
        ujKosarList[hunci].db += 1
      }else{
        termek.db = 1
        ujKosarList.push(termek)
      }
      setList(ujKosarList)
  
    }
  

    return(<KosarContext.Provider value={{kList, tList, athelyez}}> {children} </KosarContext.Provider>)
}
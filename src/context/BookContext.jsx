// book Context


import axios from "axios";
import { createContext, useContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    // const [query, setQuery] = useState("")
    // const [selectType, setSelectType] = useState("all")
    //ONE STATE VERSION
    const [searchInfo, setSearchInfo] = useState({
        query:"",
        selectType:"all"
    })

    const [myData, setMyData] = useState([])

    const APP_KEY = process.env.REACT_APP_apiKey

    //console.log(APP_KEY);


    const getData = async() =>{
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInfo.query}&printType=${searchInfo.selectType}&key=${APP_KEY}`
        try {
            const {data} = await axios(url);
            console.log(data);
            setMyData(data.items)
            
        } catch (error) {
            console.log(error);
        }
    }
   

    const values = {myData,setMyData,searchInfo, setSearchInfo,getData}
  return (
    <BookContext.Provider value={values}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
    return useContext(BookContext)
}

export default BookContextProvider;
import React from 'react'
import { CardContainer, HomeImg, HomePage} from './Home.style'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { useBookContext } from '../../context/BookContext'
// import {myHomePageImg} from '../../assets/search.jpeg'
import {homeImg} from "../../assets/book.jpg";
const Home = () => {
  const {myData} = useBookContext()

  return (

    <HomePage>
      <Header/>
      {myData.length ? (<CardContainer>
        {
          myData.map(item=>(
            <Card key={item.id} item={item}/>
          ))
        }
        
      </CardContainer>) : 
      (<HomeImg> <img src="https://surreychristianschool.weebly.com/uploads/7/7/6/9/7769000/3158071_orig.jpg" alt="Home" /></HomeImg>)}
      
    </HomePage>

  )
}

export default Home

// https://www.googleapis.com/books/v1/volumes?q=react&printType=all&key=AIzaSyD7uIkO9eZ62Hin2CKObxqlTt2yAaX2S_I
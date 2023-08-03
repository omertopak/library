import React from 'react'
import { CardDetailButton, CardDiv, CardImg, CardTitle } from './Card.style'
import defautImg from "../../assets/book.jpg"
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
  const{volumeInfo} = item;
  const navigate = useNavigate()
  

  return (
    <CardDiv>
      <CardImg src={volumeInfo?.imageLinks?.thumbnail || defautImg}/>
      <CardTitle>
      {volumeInfo.title}
      </CardTitle>
      <CardDetailButton onClick={() => navigate(`/detail/${item.id}` , {state: item})} >
        View Details
      </CardDetailButton >
    </CardDiv>
  )
}

export default Card
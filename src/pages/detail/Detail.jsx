import React from 'react';
import { DetailImg,DetailContainer,DetailP,DetailTitle } from './Detail.style';
import { useLocation, useParams } from 'react-router-dom';
import defaultImg from "../../assets/book.jpg";


const Detail = () => {
  const { state } = useLocation();
  const {id} = useParams();
  //bu id ile api den veri cek.
  console.log(state);
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg><img 
            src={state.volumeInfo?.imageLinks?.thumbnail || defaultImg}
            alt=""
          /></DetailImg>
      <DetailP>{state.volumeInfo.description}</DetailP>
    </DetailContainer>
  )
}

export default Detail
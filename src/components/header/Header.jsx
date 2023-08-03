import React from 'react'
import { DataDiv, SearchButton, SearchDiv, SearchForm, SearchInput, SearchSelect } from '../header/Header.style'
import { useBookContext } from '../../context/BookContext'


const Header = () => {
  const {searchInfo , setSearchInfo , getData} = useBookContext();
  const printType = ["all","books","magazines"];

  const handleChange = (e) =>{
    //console.log(e.target);
    //console.log(e.target.value);
    //console.log(e.target.name +"  "+ e.target.value);
    setSearchInfo({...searchInfo, [e.target.name]:e.target.value })
  }
  //console.log(searchInfo);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    getData()
  }

  return (
    
      <SearchForm onSubmit={handleSubmit}>
        <div>
          <SearchInput 
            type='search'
            placeholder='Search...'
            name='query' //key
            value={searchInfo.query}
            onChange={handleChange} 
            />
            
          <SearchSelect
           value={searchInfo.selectType}
           name='selectType'
           onChange={handleChange}>
            {printType.map(item =>
            <option key={item} value={item} >{item}</option>)}
          </SearchSelect>
        </div>
        <SearchButton>
          SEARCH
        </SearchButton>
      </SearchForm>


  )
}

export default Header
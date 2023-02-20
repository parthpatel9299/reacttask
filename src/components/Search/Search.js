import React from 'react'
import { useState } from 'react';

export default function Search() {
  const [search , setSearch] = useState('')
  console.log(search,'search');
  const Image = `https://source.unsplash.com/random/400×300/?${search}`;
  const inputVal = (e) => {
    const searchRes = e.target.value;
    setSearch(searchRes)
  }
  return (
    <>
      <div>
        <input type="text" placeholder='search....' onChange={inputVal} />
      {search === '' ? null : <img src={Image} alt="" /> }  
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'

const Heading = () => {

    const [value, setvalue] = useState([]);
    // const [search, setsearch] = useState();
    // console.log(search)

    async function fetchRecipe(){
        let  res=await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=facab829a9df46a58898f33a4c22d32e")
        let data=await res.json()
        setvalue(data.articles)
        // console.log(data)
    }
    useEffect(()=>{
        fetchRecipe()
    },[])
    //  console.log(value)

  
  return (
        <div>
        {value.map((ele)=>{
            return<div className="card d-flex topHeadlines " style={{width: '20rem'}} >
 <marquee behavior="" direction="up"> <img style={{height:'150px'}}  src={ele.urlToImage} className="card-img-top" alt="..." /></marquee>
  <div className="card-body">
   <marquee behavior="" direction="left"> <h5 className="card-title"> {ele.title}</h5></marquee>
    <p className="card-text"></p>
    <a href={ele.url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 })}
 </div>
  )
}

export default Heading

import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Heading from './Heading';
const Home = (props) => {
  
  const [value, setvalue] = useState([])
  const [serch, setserch] = useState('would');
   let searchref=useRef()

  async function fetchNews() {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${ props.ans? props.ans:serch}&apiKey=facab829a9df46a58898f33a4c22d32e`)
    let data = await res.json()
    setvalue(data.articles)
  }
  useEffect(() => {
    fetchNews()
  }, [ props.ans,serch])
  console.log(value);

  // let searchref = useRef()
  const handlSearch = (e) => {
    e.preventDefault();
    let searchvalue = searchref.current.value
    setserch(searchvalue)
    console.log(searchvalue)
  }
  return (
    <div className =" "> 
     <form className="d-flex m-auto gap-3" role="search"style={{width:'450px'}}>
  <input className="form-control me-auto" ref={searchref} type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handlSearch} className="btn btn-outline-success" type="submit">Search</button>
</form>

     <div className='d-flex'>
    <div className='container row mt-3 d-flex justify-content-center'>
      {value.map((ele) => {
        return <div className="card mg-start" style={{ width: '20rem'}}>
          <img style={{height:'200px',borderStartEndRadius
          :'30px'}} src={ele.urlToImage} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text"></p>
            <Link href={ele.url} className="btn btn-primary">click me</Link>
          </div>
        </div>
        


      })}
      </div>
      <div className=''>
        <h1>Headline News</h1>
        <Heading/>

      </div>
    </div>
    </div>

  )
}

export default Home

import { useState,useEffect } from 'react';
import {  Link } from 'react-router-dom'
import useFetch from './useFetch';

const AllCountries = ({country, name}) => {
  let url = name ? `https://restcountries.com/v2/name/${name}` : "https://restcountries.com/v2/all"
 
  
  const {data,loading} = useFetch(url);
  const [countries, setCountries] = useState([]);



  useEffect(()=>{
    if (name){
      setCountries(data)
    }
    else{
      if(country==="all"){
        setCountries(data)
      }
      else{
      setCountries(data.filter((filterCountry)=>{
        return filterCountry.region === country;

      }))
    }
    }
  

  },[country,name,data])

    return ( 
        
        <div className='container-fluid  '>
            <div className='row justify-content-evenly allcountry' >
               {countries.length ? countries.map((oneCountry) => {
               
                        const {flag,name,population,region,capital} = oneCountry;
                        return(
                            <Link to={`/${name}`} className='col-xs-2 col-sm-4 col-md-3 col-xl-2   rounded px-0 mx-lg-5 mx-2 my-3   colorcountry' key={name}>
                           <div key={name} >
                          
                                <img src={flag} alt={name} className="img-fluid rounded-top px-0 "/>
                                
                                <div className="info pt-2 px-2  ">
                                    <h4>{name}</h4>
                                    <div ><h5 className='d-inline'>population: </h5><h6 className='d-inline '>{population.toLocaleString("en-US")}</h6></div>
                                    {region && <div><h5 className='d-inline'>region: </h5><h6 className='d-inline '>{region}</h6></div>}
                                    {capital && <div><h5 className='d-inline'>capital: </h5><h6 className='d-inline '>{capital}</h6></div>}
                                </div>
                            </div>
                           </Link>
                        )
                    })
                    : <h1 className={loading ? "x" : "loading"} style={{left:"35%"}}>There is no result for your search</h1>}
                  
            </div>
        </div>
     
     );
}
 
export default AllCountries;
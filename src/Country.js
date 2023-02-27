import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import useFetch from './useFetch';


const OneCountry = ({getcountryname}) => {
    const name =useParams();
    console.log(name);
    
 console.log(name);
    const {data,loading} = useFetch(`https://restcountries.com/v2/name/${ name.countryName}?fullText=true`);
    const [aboutCountry,setAboutCountry]=useState(data);
  useEffect(()=>{
   setAboutCountry(data);

  },[data])



    return ( 
        <div className="  countryPage">
            {loading && <h1 className="loading">Loading ...</h1>}
            <div className="container">
                <div className="back">
                    <Link to='/'><i className="fa fa-arrow-left"></i>Back</Link>
                </div>
            </div>
            {aboutCountry.length === 1 &&   
            
                <div className="country">
                    <div className="container about">
                        <div className=" flag ">
                            <img src={aboutCountry[0].flag} alt={aboutCountry[0].name} className=" img col"/>
                        </div>
                        <div className="countryInfo ">
                            <div className="name">
                            <h1>{aboutCountry[0].name}</h1>
                            </div>
                            <div className="generalInfo ">
                                <div className="geoInfo  ">
                                {aboutCountry[0].nativeName && <div><h3 className="">native name:</h3>{aboutCountry[0].nativeName}</div>}
                                    <div><h3 className="">population:</h3>{(aboutCountry[0].population.toLocaleString("en-US"))}</div>
                                    {aboutCountry[0].region && <div><h3 className="">region:</h3>{aboutCountry[0].region}</div>}
                                    {aboutCountry[0].subregion && <div><h3 className="">sub region:</h3>{aboutCountry[0].subregion}</div>}
                                    {aboutCountry[0].capital && <div><h3 className=" " > capital:</h3>{aboutCountry[0].capital}</div>}
                                </div>
                                <div className="moreInfo  ">
                                    <div><h3>top level domain:</h3>{aboutCountry[0].topLevelDomain[0]}</div>
                                    <div><h3>currencies:</h3>{aboutCountry[0].currencies[0].name} ({aboutCountry[0].currencies[0].symbol})</div>
                                    <div><h3>languages:</h3>{aboutCountry[0].languages.map((lang) =>{
                                                                return <>
                                                                    {lang.name}, 
                                                                </>
                                                            })}</div>
                                    {aboutCountry[0].regionalBlocs===true &&
                                        <div><h3>regional blocs:</h3>{aboutCountry[0].regionalBlocs.map((bloc) =>{
                                                                return <>
                                                                    {bloc.name} ,
                                                                </>
                                                            })}</div>
                                    }
                                </div>
                            </div>
                            { <div className="borderCountries">
                                    <h3 className="">border countries:</h3>
                                    { aboutCountry[0].borders? aboutCountry[0].borders.map((element) => { 
                                         const names = getcountryname(element);
                                                                        
                                        return(
                                             <Link className="borders" to={`/${names}`} key={element}>{names}</Link>
                                        )
                                    }):false}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {!aboutCountry.length && <h1 className={loading ? "x":"loading"}>Page not found</h1>}
        </div>
     );
}
 
export default OneCountry;
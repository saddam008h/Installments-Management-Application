
import ContactList from './ContactList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  function handleSearch(e){
    const filteredResults = userData.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredData(filteredResults)
  }

    useEffect(() => {
        axios
        .get('http://localhost:8000/signup')
        .then(res =>{ 
          
          setUserData(res.data)
          setFilteredData(res.data)
    })
        .catch(err =>{console.log("error")})   
    }, [])


  return (
   
  <div>
     <div className='container'>
      
      <form className="d-flex pt-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
    
    {filteredData && filteredData.map(({_id,name, phone, cnic,price}) => (
        <ContactList key={_id} id={_id} name={name}  phone={phone} cnic={cnic} price={price}/>
    ))}
  
  </div>

  );
}

export default Home;

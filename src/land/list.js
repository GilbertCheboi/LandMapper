import React, { useEffect, useState } from 'react';
import { Map } from './feed';
import './styles.css';
import Card from './Card';




export function App() {

  const [items, setItems] = useState([]);




    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.11:8000/api/Land/');
        const data = await response.json();
        console.log(data)
        setItems(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

  
    // const listItems = items.map((item, index) => (
    //   <li key={index}>{item.name} {item.country} {item.county}</li>
    // ));



    const cardItems = items.map((item, index) => (
      <Card
        key={index}
        title={item.name}
        description={`${item.country}, ${item.county}, ${item.specific_location}`}
        country={item.country}
        county={item.county}
        sub_county={item.sub_county}
        price={item.price}
        image={item.image}
        content={item.content}
        timestamp={item.timestamp}
        // Add any other props you want to pass to the Card component
      />
    ));

     // Extract latitude and longitude from API results and create an array of items for the Map component
  const mapItems = items.map((item) => ({
    lat: parseFloat(item.center_latitude),
    lng: parseFloat(item.center_longitude),
    title: item.realtor,
  }));


    useEffect(() => {
      fetchData();
    }, []);
   return (
      <div>
        <div className='side-page '>
        <div className="search-container">
          <input type="text" placeholder="Search..."></input>
           <button type="submit">Search</button>
           </div>
           <div>
            {cardItems}
           {/* <ul>{listItems}</ul> */}
    </div>
            
        </div>
      
        <Map
        items={mapItems} />
      </div>
     
    );

}







//AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98
//http://192.168.0.20:8000/api/Land/
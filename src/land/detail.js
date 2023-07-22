import React, { useEffect, useState } from 'react';

// Function to fetch item details from the API
export async function fetchItemDetails(itemId) {
  try {
    const response = await fetch(`http://192.168.0.11:8000/api/Land/${itemId}/`);
    if (!response.ok) {
      throw new Error('Error fetching item details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching item details:', error);
    return null;
  }
}

const ItemDetails = ({ itemId }) => {
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchItemDetails(itemId);
      if (data) {
        setItemDetails(data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{itemDetails.name}</h2>
      <p>{itemDetails.description}</p>
      {/* Display other item details here */}
    </div>
  );
};

export default ItemDetails;

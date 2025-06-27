import React, { useEffect, useState } from 'react';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sampleData = [
    { id: 1, name: 'Oceanview Hotel', location: 'Beachside', price: '$120' },
    { id: 2, name: 'Mountain Retreat', location: 'Mountains', price: '$100' },
    { id: 3, name: 'City Plaza', location: 'Downtown', price: '$150' }
  ];

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Simulating a real API request
        setTimeout(() => {
          setHotels(sampleData);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError('Failed to fetch hotels data.');
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="hotels-container">
      <h2>Explore Our Hotels</h2>
      {loading ? (
        <p>Loading hotels...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ul className="hotels-list">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="hotel-item">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>Price: {hotel.price} per night</p>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .hotels-container {
          padding: 20px;
          background-color: #f4f4f9;
          text-align: center;
        }

        .hotels-container h2 {
          font-size: 28px;
          color: #2a2a72;
        }

        .hotels-list {
          list-style: none;
          padding: 0;
        }

        .hotel-item {
          background: #fff;
          border: 1px solid #ddd;
          margin: 10px auto;
          padding: 15px;
          max-width: 600px;
          text-align: left;
        }

        .hotel-item h3 {
          margin: 0 0 5px;
        }

        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Hotels;

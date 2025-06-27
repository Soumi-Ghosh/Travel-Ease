import React, { useEffect, useState } from 'react';

const CarRentals = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sampleData = [
    { id: 1, model: 'SUV', rentalPrice: '$50/day', description: 'Comfortable SUV for your travels' },
    { id: 2, model: 'Sedan', rentalPrice: '$30/day', description: 'Affordable and fuel-efficient' },
    { id: 3, model: 'Luxury Car', rentalPrice: '$150/day', description: 'Top-class luxury car' }
  ];

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Simulating a real API request
        setTimeout(() => {
          setCars(sampleData);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError('Failed to fetch car rentals.');
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="car-rentals-container">
      <h2>Car Rentals</h2>
      {loading ? (
        <p>Loading car rentals...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ul className="car-rentals-list">
          {cars.map((car) => (
            <li key={car.id} className="car-item">
              <h3>{car.model}</h3>
              <p>{car.description}</p>
              <p>Rental Price: {car.rentalPrice}</p>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .car-rentals-container {
          padding: 20px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .car-rentals-container h2 {
          font-size: 28px;
          color: #2a2a72;
        }

        .car-rentals-list {
          list-style: none;
          padding: 0;
        }

        .car-item {
          background: #fff;
          border: 1px solid #ddd;
          margin: 10px auto;
          padding: 15px;
          max-width: 600px;
          text-align: left;
        }

        .car-item h3 {
          margin: 0 0 5px;
        }

        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default CarRentals;

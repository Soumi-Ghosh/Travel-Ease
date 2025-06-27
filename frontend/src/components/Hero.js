import React from 'react';  

const Hero = () => {  
    const handleSearch = () => {  
        alert('Search functionality is under development!');  
    };  

    return (  
        <section className="hero">  
            <h2>Discover, Plan, and Book</h2>  
            <p>Your one-stop solution for all travel needs</p>  
            <div className="search-container">  
                <input type="text" placeholder="From" />  
                <input type="text" placeholder="To" />  
                <input type="date" />  
                <input type="time" />  
                <select>  
                    <option value="">Select Travel Mode</option>  
                    <option value="flight">Flight</option>  
                    <option value="train">Train</option>  
                    <option value="bus">Bus</option>  
                    <option value="car">Car</option>  
                    <option value="cruise">Cruise</option>  
                </select>  
                <button onClick={handleSearch}>Search</button>  
            </div>  
        </section>  
    );  
};  

export default Hero;
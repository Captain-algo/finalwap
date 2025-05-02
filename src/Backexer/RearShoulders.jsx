'use client';
import React, { useEffect, useState } from 'react';

const RearShoulders = () => {
  const [shoulderData, setShoulderData] = useState([]);

  useEffect(() => {
    const fetchShoulderData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders?limit=1000&offset=0`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '182b69f8a8msh2a3b53184741d69p129ce6jsn239b15a652b0',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();

        // Validate it's an array before filtering
        if (Array.isArray(data)) {
          const rearOnly = data.filter(item =>
            item.target.toLowerCase().includes('posterior') ||
            item.target.toLowerCase().includes('rear') ||
            item.name.toLowerCase().includes('rear delt')
          );
          setShoulderData(rearOnly);
        } else {
          console.error('Unexpected API response:', data);
        }
      } catch (err) {
        console.error('Error fetching shoulder data:', err);
      }
    };

    fetchShoulderData();
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Rear Shoulder Exercises</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}
      >
        {shoulderData.map(ex => (
          <div
            key={ex.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              background: '#fff',
            }}
          >
            <h3 style={{ textTransform: 'capitalize', fontSize: '18px', marginBottom: '10px', color: 'black' }}>
              {ex.name}
            </h3>
            <img
              src={ex.gifUrl}
              alt={ex.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RearShoulders;

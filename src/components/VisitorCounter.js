import React, { useEffect, useState } from 'react';
import axios from 'axios';


function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/api/visit')
      .then(res => {
        setCount(res.data.count);
      })
      .catch(err => {
        console.error("Backend error:", err);
      });
  }, []);

  return (
    <div className="visitor-counter">
      <p>Visitors: {count}</p>
    </div>
  );
}

export default VisitorCounter;





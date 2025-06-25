import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';


const DashBoard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../../public/booksData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const booksData = await response.json();

        // Convert 5-star rating to score and build peak shape
        const peaks = booksData.map(book => {
          const score = Math.round((book.rating / 5) * 340);
          return {
            name: book.bookName,
            value: score,
            color: getColor(book.bookName)
          };
        });

        setData(peaks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const getColor = (bookName) => {
      const colorMap = {
        'The Great Gatsby': '#007bff',
        'To kill a mocking bird': '#20c997',
        '1984': '#f6c343',
        'The Alchemist': '#f28500',
        'Pride and prejudice': '#dc3545',
      };
      return colorMap[bookName] || '#8884d8';
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading book data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data.length === 0) return <div>No book data available</div>;

  return (
    <div className="dashboard-container ">
      <h2 className='mb-5'>Book Ratings Analysis</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 340]} />
          {data.map((entry, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey="value"
              data={[{ name: entry.name, value: 0 }, entry, { name: entry.name, value: 0 }]}
              stroke={entry.color}
              fill={entry.color}
              fillOpacity={0.8}
            >
              <LabelList dataKey="value" position="top" style={{ fill: entry.color, fontWeight: 'bold' }} />
            </Area>
          ))}
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashBoard;

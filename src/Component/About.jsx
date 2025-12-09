import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UserAuth from './UserAuth';

function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = UserAuth();

  useEffect(() => {
    http.get('/about')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-20 text-xl text-gray-500">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5">
      <h2 className="text-4xl font-bold mb-12 text-white text-center mt-4 tracking-wide">About Me</h2>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto cursor-pointer">
        {data.length > 0 ? (
          data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-2xl shadow-lg p-8 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-center mb-4 bg-gray-900 py-2 rounded-xl">{item.name}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-gray-300">
                <p><strong>Contact:</strong> {item.contact}</p>
                <p><strong>Location:</strong> {item.loction}</p>
                <p><strong>Education:</strong> {item.eduction}</p>
                <p><strong>Level:</strong> {item.level}</p>
              </div>

              <p className="bg-gray-800 p-4 rounded-xl text-center text-gray-200 font-medium">
                {item.descrption}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">No data found</p>
        )}
      </div>
    </div>
  );
}

export default About;

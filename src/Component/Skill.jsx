import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UserAuth from './UserAuth';

function Skill() {
  const { http } = UserAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    http.get('skill')
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
    return <p className="text-center mt-10 text-gray-500">Loading skills...</p>;
  }

  return (
    <section className="bg-gray-900 py-16 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-wide">
          My Skills
        </h2>

        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.length > 0 ? (
            data.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                className="bg-gray-800 text-white rounded-lg p-6 flex flex-col justify-between shadow-md transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{skill.sname}</h3>
                <p className="text-gray-300 mb-1 font-semibold">Level: {skill.level}</p>
                <p className="text-gray-400 text-sm">Experience: {skill.experince}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No skills found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skill;

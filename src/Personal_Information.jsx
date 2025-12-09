import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UserAuth from './Component/UserAuth';
import About from './Component/About';
import Project from './Component/Project';
import Skill from './Component/Skill';

function Personal_Information() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { http } = UserAuth();

  useEffect(() => {
    http.get('/personal')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (Loading) {
    return <p className="text-center mt-20 text-xl text-gray-500">Loading...</p>;
  }

  return (
    <>
      <section className="bg-gray-800 cursor-pointer py-16 px-5 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white text-center tracking-wide">
            Personal Information
          </h2>

          <div className="flex flex-col gap-10">
            {Data.length > 0 ? (
              Data.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  className="flex flex-col md:flex-row items-center md:items-start bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
                >
                  {/* Profile Image Left */}
                  <div className="md:w-1/3 w-48 h-48 md:h-64 m-6 md:m-8 flex-shrink-0">
                    <img
                      src={`http://127.0.0.1:8000/storage/${item.url}`}
                      alt={item.name}
                      className="w-full h-full rounded-lg  border-2 border-gray-400 shadow-md"
                    />
                  </div>

                  {/* Text Content Right with Slide-in Animation */}
                  <motion.div
                    className="md:w-2/3 w-full p-6 flex flex-col justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <h3 className="text-3xl font-bold mb-2 text-white">{item.name}</h3>
                    <p className="text-white mb-1 text-lg font-semibold">{item.position}</p>
                    <p className="text-white mb-3 font-semibold">{item.email}</p>

                    <div className="flex gap-4 mt-2">
                      {item.linkdin && (
                        <a
                          href={item.linkdin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600 hover:underline font-bold"
                        >
                          LinkedIn
                        </a>
                      )}
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline hover:text-gray-200 font-bold"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-300">No data found</p>
            )}
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Project />
      </section>
      
    </>
  );
}

export default Personal_Information;

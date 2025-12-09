import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UserAuth from './UserAuth';

function Project() {
  const { http } = UserAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    http.get('/project')
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading projects...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-10 text-white mt-10 text-center">My Projects</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 gap-8">
          {data.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{project.pname}</h3>
              <p className="text-md font-medium mb-2">{project.title}</p>
              <p className="text-sm mb-4">{project.description}</p>
              <p className="text-xs bg-white bg-opacity-20 px-3 py-1 text-gray-900 rounded-full inline-block">
                Tech Stack: {project.language}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">No projects found</p>
      )}
    </div>
  );
}

export default Project;

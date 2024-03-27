import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/atendimento">Atendimento</Link>
      <Link to="/experiencia">Experiência</Link>
       </div>
  );
};

export default Sidebar;

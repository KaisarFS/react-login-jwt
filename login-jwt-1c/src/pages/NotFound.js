import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/login');
  };

  const handleBanana = () => {
    window.open('https://img-global.cpcdn.com/recipes/79a7d13313f195d4/680x482cq70/pisang-goreng-foto-resep-utama.jpg');
  };

  return (
    <section className="container-fluid">
      <div className="row main">
        <div className="col-md-12">
          <h1>404</h1>
          <h2><i className="fa fa-frown-o" aria-hidden="true"></i> Oh! The page cannot be found...</h2>
          <h3>The link might be incorrect...</h3>
          <h4>or the page was deleted</h4>
          <button onClick={handleGoBack}>Go Back</button>
          <button onClick={handleBanana}>PISANG</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

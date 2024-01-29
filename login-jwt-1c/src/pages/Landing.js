import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../assets/Landing.css';

const Landing = () => {
  const { logout, username, token, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && !token) {
      navigate('/login');
    }
  }, [navigate, token, isAuthenticated]);

  const handleLogout = () => {
    logout();
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <header>
        <nav className="header-nav flex-container">
          <h1 className="logo"><a className="logo-link" href="google.com">KAI</a></h1>
          <ul className="header-menu flex-container">
            <li><a className="header-menu-link" href="google.com">LINK</a></li>
            <li><a className="header-menu-link" href="google.com">LINK</a></li>
            <li><a className="header-menu-link" href="google.com">LINK</a></li>
            <li><a className="header-menu-link" href="https://img-global.cpcdn.com/recipes/79a7d13313f195d4/680x482cq70/pisang-goreng-foto-resep-utama.jpg">Pisang</a></li>
          </ul>
          <button className="ghost-button" onClick={handleLogout}>Logout</button>

          <div className="hamburger" onClick={toggleDrawer}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </nav>
        <div className={`mobile-nav ${isDrawerOpen ? 'openDrawer' : ''}`}>
          <button className="logout" onClick={handleLogout}>LOGOUT</button>
          <a href="google.com">Link</a>
          <a href="google.com">Link</a>
          <a href="google.com">Link</a>
          <a href="https://img-global.cpcdn.com/recipes/79a7d13313f195d4/680x482cq70/pisang-goreng-foto-resep-utama.jpg">Pisang</a>
          <a href="https://www.instagram.com/kaisarfs/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" style={{ transform: 'scale(1.8)' }}></i></a>
          <a href="https://www.linkedin.com/in/kaisarfs/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" style={{ transform: 'scale(1.8)' }}></i></a>
          <a href="google.com"><i className="fab fa-facebook" style={{ transform: 'scale(1.8)' }}></i></a>
        </div>
        <section className="header-content">
          <div data-aos="fade-left">
            <figure className="header-img">
              <img
                src="https://images.pexels.com/photos/1748652/pexels-photo-1748652.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Man holding camera looking at fireworks"
              />
            </figure>
          </div>
          <div data-aos="fade-up">
            <div className="header-description container-custom">
              <h2 className="header-title">Welcome back, {username}</h2>
              <p>Halooo mas den, mas novi. Maaf tampilannya masih seadanya soalnya ngejar sprint kantor juga. Kemarin ngerjakannya juga sambil mengingat ingat lagi react js karena lama ngga kesentuh. Selamat beraktifitas kembali. Lorem, ipsum dolor sit amet consectetur adipisicing, enim blanditiis facere!</p>
              <button className="type-button">Start Exploring</button>
            </div>
          </div>
        </section>
        <aside>
          <div className="social-media">
            <ul>
              <li><a href="https://www.linkedin.com/in/kaisarfs/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/kaisarfs/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="google.com"><i className="fab fa-facebook"></i></a></li>
            </ul>
          </div>
        </aside>
      </header>

    </div>
  );
};

export default Landing;
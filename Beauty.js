import React from 'react';
import './Beauty.css';
import { Link } from 'react-router-dom';

export default function Beauty() {
  return (
    <>
      {/* Full-screen animated image */}
      <div className="fullscreen-bg">
        <img src="../beauty09.jpg" alt="Beauty Collection" className="fullscreen-img" />
        <div className="overlay-text">
          <h1>Discover Your Beauty</h1>
          <p>Shop the latest trends and timeless classics</p>
          <Link to="/" className="shop-now-btn">SHOP NOW</Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="home-cards">
  <div>
    <img src="../beauty05.jpg" alt="Classic Dresses" style={{ height: '200px' }} />
    <h3>Explore our classic range of products</h3> 
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty06.jpg" alt="Coat Pants" style={{ height: '200px' }} />
    <h3>Elegant  for every occasion</h3> 
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty07.jpg" alt="Kurtas Pajama" style={{ height: '200px' }} />
    <h3>Face Wash - Wash your face for all time</h3> 
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty01.jpg" alt="Stylish Wear" style={{ height: '200px' }} />
    <h3>Lipstick - Trendy and fashionable styles</h3>
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty02.jpg" alt="Latest Collection" style={{ height: '200px' }} />
    <h3>Foundation - Shop the latest designs</h3>
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty03.jpg" alt="Ladies Sandals" style={{ height: '200px' }} />
    <h3>Eye Liner - Comfortable and stylish</h3> 
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
  <div>
    <img src="../beauty04.jpg" alt="Beautiful Sarees" style={{ height: '200px' }} />
    <h3>Makeup Kit - Exquisite kit for special occasions</h3> 
    <Link to="/">SHOP NOW<i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
  </div>
</section>


      {/* Carbon Commitment Section */}
      <section className="carbon-dark">
        <div className="content">
          <h2>Committing to Being Carbon Negative</h2>
          <p>Our commitment to a greener future</p>
        </div>
      </section>

      {/* Popular Searches */}
      <h4>POPULAR SEARCHES</h4>
      <hr />
      <br />
      <div className="popular-searches">
        <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Handbags | Watches | Shoes | Jewellery | Sarees | Lehenga</p>
      </div>

      {/* Office Information */}
      <div className="part">
        <hr />
        <h4>Registered Office Address</h4>
        <div className="part-p">
          <p>Buildings Alyssa,</p>
          <p>Embassy Tech Village,</p>
          <p>Outer Ring Road, Bengaluru – 560103, India</p>
        </div>
        <div className="side">
          <p>CIN: U72300KA2007PTC041799</p>
          <p>Telephone: +91-9306282979</p>
        </div>
      </div>
      <hr />

      {/* Online Shopping Info */}
      <div className="online">
        <h4>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
        <div className="online-p">
          <p>Experience the best of online shopping for men, women, and kids at Myntra. Redefine your style statement with our trendy items and get your favorites delivered right to your doorstep.</p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

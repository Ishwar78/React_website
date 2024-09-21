import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <div className="medal">
        <img src="../myntra01.jpg" alt="Banner" className="banner-img" />
      </div>

      {/* Brand Section */}
      <h2>GRAND GLOBAL BRANDS</h2>

      <section className="home-cards">
        <div>
          <img src="../OIP1.jpeg" alt="Classic Dresses" />
          <h3>Classic Dresses</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../OIP2.jpeg" alt="Coat Pants" />
          <h3>Coat Pants</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../OIP3.jpeg" alt="Kurtas Pajama" />
          <h3>Kurtas Pajama</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../OIP4.jpeg" alt="Stylish" />
          <h3>Stylish</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../OIP5.jpeg" alt="Latest" />
          <h3>Latest</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../sandal.jpg" alt="Ladies Sandals" />
          <h3>Ladies Sandals</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
        <div>
          <img src="../OIP7.jpeg" alt="Beautiful Sarees" />
          <h3>Beautiful Sarees</h3>
          <Link to="/">SHOP NOW</Link>
        </div>
      </section>

      {/* Bottom Image Grid */}
      <div className="image-grid">
        <img src="../OIP1.jpeg" alt="Brand 1" />
        <img src="../OIP2.jpeg" alt="Brand 2" />
        <img src="../OIP3.jpeg" alt="Brand 3" />
        <img src="../OIP7.jpeg" alt="Brand 4" />
        <img src="../OIP4.jpeg" alt="Brand 5" />
        <img src="../OIP5.jpeg" alt="Brand 6" />
        <img src="../OIP6.jpeg" alt="Brand 7" />
      </div>

      {/* Another Banner */}
      <div className="mid">
        <img src="../myntra02.jpg" alt="Banner" className="banner-img" />
      </div>

      <h4>POPULAR SEARCHES</h4>
      <hr />
      <br />
      <div className="popular">
        <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags |
           Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
           Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings |
           Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
           Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
           Adidas Shoes | Woodland Shoes | Jewellery | Designer Sarees</p>
      </div>

      {/* Office Information */}
      <div className="part">
        <hr />
        <h4>Registered Office Address</h4>
        <div className="part-p">
          <p>Buildings Alyssa,</p>
          <p>Begonia and Clover situated in Embassy Tech Village,</p>
          <p>Outer Ring Road,</p>
          <p>Devarabeesanahalli Village,</p>
          <p>Varthur Hobli,</p>
          <p>Bengaluru – 560103, India</p>
        </div>
        <div className="side">
          <p>CIN: U72300KA2007PTC041799</p>
          <p>Telephone: +91-9306282979</p>
        </div>
      </div>

      <div className="online">
        <h4>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
        <div className="online-p">
          <p>If you would like to experience the best of online shopping for men, women, and kids in India,
            you are at the right place. Myntra is the ultimate destination for fashion and lifestyle,
            being host to a wide array of merchandise including clothing, footwear, accessories, jewellery,
            personal care products, and more. You can shop online at Myntra from the comfort of your home
            and get your favorites delivered right to your doorstep.</p>
        </div>
      </div>
      <br /><br />
    </>
  );
}

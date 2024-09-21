import React from 'react';
import './Living.css';  

export default function Leaving() {
  return (
    <>
      {/* Product Section */}
      <section className="home-cards">
        <div>
          <img src="../home05.jpg" alt="Classic Dresses" />
          <h3>Gold Toned Solid Lord Ganesha Ceramic </h3>
          <p>Elegant and timeless pieces for all occasions.</p>
        </div>
        <div>
          <img src="../home01.jpg" alt="Coat Pants" />
          <h3>6 pieces Transparent Highball Glasses-Water </h3>
          <p>Stylish and durable glasses for every day use.</p>
        </div>
        <div>
          <img src="../home02.jpg" alt="Kurtas Pajama" />
          <h3>Transparent Crystal Column Candle Holder</h3>
          <p>Traditional attire with a contemporary touch.</p>
        </div>
        <div>
          <img src="../home03.jpg" alt="Stylish Wear" />
          <h3>White Porcelain Tea Cup And Saucer</h3>
          <p>Bold and chic outfits for any occasion.</p>
        </div>
        <div>
          <img src="../home04.jpg" alt="Latest Wear" />
          <h3>White and Gray Printed Ceremic Matte Bowl </h3>
          <p>Up-to-date fashion to keep you ahead.</p>
        </div>
        <div>
          <img src="../home06.jpg" alt="Ladies Sandals" />
          <h3>Home Decor Items</h3>
          <p>Comfortable and fashionable footwear for women.</p>
        </div>
        <div>
          <img src="../home07.jpg" alt="Beautiful Sarees" />
          <h3>Home Decor Items</h3>
          <p>Graceful traditional wear for festive occasions.</p>
        </div>
      </section>

      {/* Carbon Commitment Section */}
      <section className="carbon-dark">
        <div className="content">
          <h2>Committing to Being Carbon Negative</h2>
          <p>We are committed to reducing our environmental impact by going carbon negative.</p>
        </div>
      </section>

      {/* Popular Searches Section */}
      <h4>POPULAR SEARCHES</h4>
      <hr />
      <br />
      <div className="popular-searches">
        <p>
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags |
          Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | 
          Fastrack Watches | Kurtis | Nike Shoes | Smart Watches | Gowns | Rings | Saree | Adidas Shoes | Woodland Shoes
        </p>
      </div>

      {/* Office Information */}
      <div className="part">
        <hr />
        <h4>Registered Office Address</h4>
        <div className="part-p">
          <p>Buildings Alyssa, Begonia and Clover, Embassy Tech Village, Outer Ring Road, Bengaluru – 560103, India</p>
        </div>
        <div className="side">
          <p>CIN: U72300KA2007PTC041799</p>
          <p>Telephone: +91-9306282979</p>
        </div>
      </div>
      <hr />

      {/* Online Shopping Section */}
      <div className="online">
        <h4>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
        <div className="online-p">
          <p>
            Enjoy the best of online shopping in India with our wide range of fashion and lifestyle products.
            Shop for clothing, footwear, accessories, and more from the comfort of your home.
          </p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

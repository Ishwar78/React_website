import React from 'react';
import './Studio.css'; 

export default function Studio() {
  return (
    <>
      {/* Full-screen background section */}
      <div className="studio-header">
        <img src="../studio01.jpg" alt="Studio" className="studio-bg-img" />
        <div className="studio-overlay-text">
          <h1>Welcome to Our Studio</h1>
          <p>Your one-stop fashion destination</p>
        </div>
      </div>

      {/* Popular Searches Section */}
      <h4 className="section-title">POPULAR SEARCHES</h4>
      <hr />
      <br />
      <div className="popular-searches">
        <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | 
           Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | 
           Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | 
           Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | 
           Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | 
           Designer Sarees
        </p>
      </div>

      {/* Registered Office Address Section */}
      <div className="office-info">
        <hr />
        <h4 className="section-title">Registered Office Address</h4>
        <div className="address-details">
          <p>Buildings Alyssa,</p>
          <p>Begonia and Clover situated in Embassy Tech Village,</p>
          <p>Outer Ring Road,</p>
          <p>Devarabeesanahalli Village,</p>
          <p>Varthur Hobli,</p>
          <p>Bengaluru – 560103, India</p>
        </div>
        <div className="additional-info">
          <p>CIN: U72300KA2007PTC041799</p>
          <p>Telephone: +91-9306282979</p>
        </div>
      </div>
      <hr />

      {/* Online Shopping Section */}
      <div className="online-info">
        <h4 className="section-title">ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
        <div className="online-details">
          <p>If you would like to experience the best of online shopping for men, women, and kids in India, 
            you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, hosting 
            a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care 
            products, and more. Redefine your style statement with our trendy items. Shop online at Myntra from 
            the comfort of your home and get your favorites delivered right to your doorstep.
          </p>
        </div>
      </div>
      <br /><br />
    </>
  );
}

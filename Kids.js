import React from 'react';
import './Kids.css';

export default function Kids() {
  return (
    <>
      {/* Product Section */}
      <section className="home-cards">
        <div>
          <img src="../th78.jpg" alt="Classic Dresses" />
          <h3>Dress of Girls</h3>
          <p>Shop the latest collection of classic dresses for kids.</p>
        </div>
        <div>
          <img src="../kids.jpg" alt="Coat Pants" />
          <h3> Pants</h3>
          <p>Elegant  pants for boys, perfect for  occasions.</p>
        </div>
        <div>
          <img src="../kids02.jpg" alt="Kurtas Pajama" />
          <h3>Kurtas Pajama</h3>
          <p>Traditional kurtas and pajamas in vibrant designs.</p>
        </div>
        <div>
          <img src="../th65.jpg" alt="Stylish Wear" />
          <h3>Stylish Bags</h3>
          <p>Trendy and stylish outfits for your young fashionista.</p>
        </div>
        <div>
          <img src="../kids01.jpg" alt="Latest Wear" />
          <h3>Latest Collection</h3>
          <p>Explore the latest fashion for kids this season.</p>
        </div>
        <div>
          <img src="../kids04.jpg" alt="Ladies Sandals" />
          <h3>Shirts</h3>
          <p>Comfortable and stylish Shirts for every occasion.</p>
        </div>
        <div>
          <img src="../kids03.jpg" alt="Beautiful Sarees" />
          <h3>Lehenga Choli</h3>
          <p>Graceful and beautiful sarees for special moments.</p>
        </div>
      </section>

      {/* Carbon Section */}
      <section className="carbon-dark">
        <div className="content">
          <h2>Committed to Being Carbon Negative</h2>
          <p>Our goal is to be carbon negative by 2030, with sustainable practices across all operations.</p>
        </div>
      </section>

      {/* Popular Searches Section */}
      <h4>POPULAR SEARCHES</h4>
      <hr />
      <div>
        <p>
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags |
          Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
          Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings |
          Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
          Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
          Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2024 Your Fashion Store | All rights reserved</p>
      </div>
    </>
  );
}

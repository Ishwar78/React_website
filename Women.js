import React, { useEffect } from 'react';
import './Women.css';
import { Link } from 'react-router-dom';

export default function Women() {

  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (slides.length === 0 || dots.length === 0) {
       
        return;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }

      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";

      setTimeout(showSlides, 2000); 
    }
  }, []);

  return (
    <>
      {/* Banner Slideshow */}
      <div className='slideshow-container'>
        <div className="mySlides fade">
          <img src="../OIP78.jpg" alt="Women Banner 1" />
        </div>
        <div className="mySlides fade">
          <img src="../OIP89.jpg" alt="Women Banner 2" />
        </div>
        <div className="mySlides fade">
          <img src="../OIP67.jpg" alt="Women Banner 3" />
        </div>
      </div>

      {/* Dot Indicators (add corresponding dot elements for each slide) */}
      <div style={{ textAlign: "center" }}>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div>

      {/* Product Grid */}<div className='img'>
  <div>
    <img src="../OIP6.jpeg" alt="" className='img2'/>
    <Link to="/shop1" className="shop-link">
      <h3>Shop Now</h3>
    </Link>
    <p>Women's Summer Collection</p>
  </div>

  <div>
    <img src="../OIP7.jpeg" alt="" className='img3'/>
    <Link to="/shop2" className="shop-link">
      <h3>Shop Now</h3>
    </Link>
    <p>Women's Sarees</p>
  </div>

  <div>
    <img src="../OIP8.jpeg" alt="" className='img4'/>
    <Link to="/shop3" className="shop-link">
      <h3>Shop Now</h3>
    </Link>
    <p>Women's Casual Wear</p>
  </div>

  <div>
    <img src="../OIP9.jpeg" alt="" className='img5'/>
    <Link to="/shop4" className="shop-link">
      <h3>Shop Now</h3>
    </Link>
    <p>Women's jeans T-shirt</p>
  </div>
</div>


      {/* Other content remains the same */}
      
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

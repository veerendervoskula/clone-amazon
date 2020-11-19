import React from 'react';
import Product from './Product';
import './HeroBanner.css'

function HeroBanner() {
  console.log('am inside hero.js');
  const products = [
    { id: 1, price: 120, image:'https://m.media-amazon.com/images/I/61LJFEBPBwL._AC_UL480_FMwebp_QL65_.jpg', title: 'Guns n roses AFD cross tshirt', rating: 4 },
    { id: 12, price: 10, image:'https://m.media-amazon.com/images/I/51awbxjQL3L._AC_UL480_FMwebp_QL65_.jpg', title: 'Real Madrid CF sticker', rating: 4.5 },
    { id: 13, price: 420, image : 'https://m.media-amazon.com/images/I/51Q8d6cYi0L._AC_UL480_FMwebp_QL65_.jpg',title: 'Real madrid home jersey', rating: 4 }
  ]
  return (
    <div className="hero-banner">
      <img className="hero-banner__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="hero banner at the top" />
      <div className="hero-banner__row">
        {products.map(product => (<Product key={product.id} products={product} />))}
      </div>
    </div>
  )
}

export default HeroBanner

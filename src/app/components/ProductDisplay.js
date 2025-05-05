'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDisplay() {
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const images = [
    {
      path: 'images/482350790_17924407368034773_5619733155177664341_n.jpeg',
      caption: 'Actual MacBook Device Photo'
    },
    {
      path: 'images/482222565_17924407377034773_8054349426278186978_n.jpeg',
      caption: 'Side Open View'
    },
    {
      path: 'images/482159335_17924407359034773_8721203822204971773_n.jpeg',
      caption: 'Front View'
    },
    {
      path: 'images/482149124_17924407329034773_7341785469732748159_n.jpeg',
      caption: 'Side Front View'
    },
    {
      path: 'images/482578037_17924407341034773_4069106390592454204_n.jpeg',
      caption: 'Open-like Front View'
    },
    {
      path: 'images/482175647_17924407350034773_8190258838735885897_n.jpeg',
      caption: 'System Dashboard Interface'
    }
  ];

  return (
    <main className="container">
      {/* Header Section with Separation */}
      <header className="header-section">
        <h1 className="product-title">MacBook Air M2 - Space Gray</h1>
        <div className="header-divider" />
      </header>

      {/* Main Content Grid */}
      <div className="centered-content">
        {/* Image Grid */}
        <div className="image-grid-container">
          <div className="image-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="image-item"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="image-wrapper" style={{ 
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease'
                }}>
                  <Image
                    src={img.path}
                    alt={img.caption}
                    fill
                    className="product-image"
                    style={{
                      transition: 'transform 0.5s ease',
                      transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                    priority={index === 0}
                  />
                </div>
                <div className="image-caption">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h2>Premium MacBook Air in Excellent Condition</h2>
          <p className="price">Tshs 600,000/=</p>
          <p className="description">
            This MacBook Air is in excellent condition with minimal wear. 
            It&apos;s powerful, lightweight, and perfect for work, study, or everyday use.
          </p>
          <Link href="contact" className="btn">
            Contact Seller
          </Link>
        </div>
      </div>

      {/* Specifications Section */}
      <section className="specs-section">
        <h2 className="section-heading">Specifications</h2>
        <div className="section-divider" />
        <div className="specs-grid">
          {[
            ['Model', 'MacBook Air (13-inch, Early 2015)'],
            ['Processor', '1.6 GHz Dual-Core Intel Core i5'],
            ['Graphics', 'Intel HD Graphics 6000 1536 MB'],
            ['Memory', '8 GB MHz DDR3'],
            ['Storage', '256GB SSD'],
            ['Display', '13.6-inch (1440×900)'],
            ['Battery', 'Up to 18 hours of battery life'],
            ['Color', 'Space Gray'],
            ['Condition', 'Excellent - minimal wear and tear'],
          ].map(([label, value]) => (
            <div key={label} className="spec-item">
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Included Items Section */}
      <section className="included-section">
        <h2 className="section-heading">What&apos;s Included</h2>
        <div className="section-divider" />
        <ul className="included-list">
          <li>MacBook Air (13-inch, Early 2015)</li>
          <li>Original 30W USB-C Power Adapter</li>
          <li>USB-C to MagSafe 3 Cable</li>
          <li>Original Box</li>
        </ul>
      </section>
    </main>
  );
}
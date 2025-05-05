import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'MacBook Air For Sale - Home',
}

export default function Home() {
  return (
    <section style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      padding: '3rem 0' 
    }}>
      <h1>Premium MacBook Air For Sale</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
        A beautiful MacOS Catarina in excellent condition with 8GB 1600 MHz DDR3 RAM and 256GB SSD storage.
      </p>
      
      <div style={{ position: 'relative', width: '600px', height: '400px', margin: '2rem 0' }}>
        <Image
          src="images/482350790_17924407368034773_5619733155177664341_n.jpeg"
          alt="MacBook Air hero image"
          width={600}
          height={400}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link href="/product" className="btn">
          View Details
        </Link>
        <Link 
          href="/contact" 
          className="btn" 
          style={{ backgroundColor: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}
        >
          Contact Seller
        </Link>
      </div>
      
      <section style={{ backgroundColor: 'var(--secondary-color)', padding: '3rem 0', margin: '2rem 0', width: '100%' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Key Features</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h3>Powerful Performance</h3>
              <p>
                Equipped with the M2 chip featuring a Dual-core intel core i5 CPU for 
                impressive performance and efficiency.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h3>Premium Display</h3>
              <p>
                Enjoy content on the beautiful 13.6-inch Liquid Retina display with 
                vibrant colors and exceptional clarity.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h3>All-Day Battery</h3>
              <p>
                With up to 18 hours of battery life, this MacBook Air will keep you 
                productive throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
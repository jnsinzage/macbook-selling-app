import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'MacBook Air For Sale',
  description: 'MacBook Air for sale - premium condition at a great price',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <footer className="container">
          <div style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #eaeaea', marginTop: '2rem' }}>
            <p>© {new Date().getFullYear()} MacBook Air Sale. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
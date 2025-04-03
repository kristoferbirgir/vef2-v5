// app/layout.tsx
import './globals.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main className="container" style={{ flex: 1, paddingTop: "20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

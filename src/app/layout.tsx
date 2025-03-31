// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Navbar />
        {/* flex-grow pushes the footer to the bottom if there's not enough content */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

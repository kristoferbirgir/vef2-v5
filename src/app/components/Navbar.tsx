import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="brand">
          <Link href="/">Greinarsíðan</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">Heim</Link>
          </li>
          <li>
            <Link href="/articles">Greinar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

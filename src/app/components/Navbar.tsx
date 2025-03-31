// app/components/Navbar.tsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-white">
          <Link href="/" className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Greinavefurinn
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="flex items-center text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Heim
            </Link>
          </li>
          <li>
            <Link href="/articles" className="flex items-center text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faNewspaper} className="mr-1" />
              Greinarskrif
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

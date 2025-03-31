import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 shadow-inner">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-white text-sm">
          © {new Date().getFullYear()} Greinarvefurinn. Allur réttur áskilinn.
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/privacy" className="text-white hover:text-gray-300 text-sm">
            Persónuvernd
          </Link>
          <Link href="/terms" className="text-white hover:text-gray-300 text-sm">
            Skilmálar
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="https://facebook.com/kristoferhjorleifsson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://twitter.com/kristoferbirgir" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://instagram.com/kristoferbirgir" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

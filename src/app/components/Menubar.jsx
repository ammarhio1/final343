import Link from 'next/link';

export default function Menubar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <ul className="flex space-x-6 px-6 py-4 text-sm font-medium">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <a
            href="exam1-expense-new.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Midterm Part I - Expense
          </a>
        </li>
        <li>
          <a
            href="https://website-exam-part-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Midterm Part II - Website
          </a>
        </li>
        <li>
          <Link href="/faq" className="hover:text-blue-400 transition-colors duration-200">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

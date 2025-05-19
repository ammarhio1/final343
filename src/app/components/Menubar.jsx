import Link from 'next/link';

export default function Menubar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 px-6">
        <li>
          <Link
            href="/"
            className="hover:text-yellow-300 font-semibold transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="https://exam1-expense-new.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 font-semibold transition duration-200"
          >
            Midterm Part I - Expense
          </a>
        </li>
        <li>
          <a
            href="https://exam-2-website.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 font-semibold transition duration-200"
          >
            Midterm Part II Site
          </a>
        </li>
        <li>
          <Link
            href="/faq"
            className="hover:text-yellow-300 font-semibold transition duration-200"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

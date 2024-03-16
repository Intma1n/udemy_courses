import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

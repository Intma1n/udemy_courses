import Link from 'next/link';

const Meals = () => {
  return (
    <>
      <Link href="/meals/share">Share</Link>
      <Link href="/meals/something">Something</Link>
    </>
  );
};

export default Meals;

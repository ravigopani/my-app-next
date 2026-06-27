import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Route 1 Page',
  description: 'Route 1 Page Description',
}

function randomTrueOrFalse() {
  return Math.random() > 0.5;
}

export default function Route1Page() {

  /* it will find nearest not-found.js file and render it */
  // notFound();

  /* it will find nearest error.js file and render it */
  if (randomTrueOrFalse()) {
    throw new Error('Error message from Error class');
  }

  return (
    <div>
      <h1>Route 1 Page</h1>
      <ul>
        <li><Link href="/route1/1">Route 1</Link></li>
        <li><Link href="/route1/2">Route 2</Link></li>
        <li><Link href="/route1/3" replace>Route 3</Link></li>
      </ul>
    </div>
  );
}
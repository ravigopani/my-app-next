import AnotherFile from "./another-file";
import { notFound } from 'next/navigation';

export default function Home() {

  /* it will find nearest not-found.js file and render it */
  // notFound();

  /* it will find nearest error.js file and render it */
  // throw new Error('Error message from Error class');

  return (
    <div>
      <h1>Hello World</h1>
      <AnotherFile />
    </div>
  );
}

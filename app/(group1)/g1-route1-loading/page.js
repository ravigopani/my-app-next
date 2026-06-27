/* 
    this page will be loaded after 3 seconds
*/
export default async function G1Route1Page() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div>
      <h1>G1 Route 1 Page</h1>
    </div>
  );
}
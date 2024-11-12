// edge runtime is needed to work on cloudflare deployment
export const runtime = 'edge';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}

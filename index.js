
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Image src="/logo.jpg" alt="Suprabhatam Logo" width={200} height={200} />
      <h1>Suprabhatam</h1>
      <h2>Your big breakfast buddy</h2>
      <p>Welcome to your daily dose of nutritious breakfast, delivered fresh every morning!</p>
    </div>
  );
}

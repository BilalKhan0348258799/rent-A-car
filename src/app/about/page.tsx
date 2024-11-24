import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
      <p className="mb-4">
        We provide top-notch car rental services with a focus on customer satisfaction.
      </p>
      <Image
        src="/about-us.jpg"
        alt="About us"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  );
}

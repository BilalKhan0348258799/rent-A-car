
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/cars-home.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white max-w-2xl p-8">
            <h1 className="text-5xl font-extrabold mb-6">
              Drive Your Dreams with <span className="text-blue-400">Rent A Car</span>
            </h1>
            <p className="text-lg mb-6">
              Affordable, reliable, and luxurious car rentals. Choose your ride today!
            </p>
            <a
              href="/book-now"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
            {/* <Image src="/car-icon.png" alt="Wide Range" width={50} height={50} /> */}
            <h3 className="text-2xl font-semibold mt-4">Wide Range of Cars</h3>
            <p className="mt-2 text-gray-600">
              Choose from sedans, SUVs, luxury cars, and more.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
            {/* <Image src="/dollar-icon.png" alt="Affordable" width={50} height={50} /> */}
            <h3 className="text-2xl font-semibold mt-4">Affordable Prices</h3>
            <p className="mt-2 text-gray-600">
              Competitive rates with no hidden charges.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
            {/* <Image src="/security-icon.png" alt="Reliable" width={50} height={50} /> */}
            <h3 className="text-2xl font-semibold mt-4">Reliable & Secure</h3>
            <p className="mt-2 text-gray-600">
              24/7 customer support and full insurance coverage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


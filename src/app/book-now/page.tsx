export default function BookNow() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Book Your Car</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Full Name</span>
            <input
              type="text"
              className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your name"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Email</span>
            <input
              type="email"
              className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Phone Number</span>
            <input
              type="text"
              className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your phone number"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Pickup Date</span>
            <input
              type="date"
              className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  
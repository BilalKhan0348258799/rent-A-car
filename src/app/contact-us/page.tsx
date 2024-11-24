export default function ContactUs() {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              placeholder="Your name"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              placeholder="Your email"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              placeholder="Your message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  
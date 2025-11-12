import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <main>
      <div className="overflow-hidden w-full p-8 h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-[60px]">😔</h1>
        <h1 className="text-2xl">Error 404 - Page Not Found</h1>
        <p className="text-center mt-4">
          This page you are looking for does not exists or might be redirected
          to another url
        </p>
        <a
          href="/"
          className="font-semibold px-6 py-3 border-2 border-gray-600 rounded-lg mt-8 hover:border-blue-600 transition duration-300"
        >
          Go To Homepage
        </a>
      </div>
      <Footer />
    </main>
  );
}

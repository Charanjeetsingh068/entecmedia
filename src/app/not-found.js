import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-8xl font-bold font-['Michroma'] text-[#e30613]">404</h1>
      <h2 className="text-3xl font-['Michroma'] mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-4 text-lg text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 border border-[#e30613] text-white rounded-full hover:bg-[#e30613]/20 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}

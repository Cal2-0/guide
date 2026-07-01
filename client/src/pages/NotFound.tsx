import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
      <div className="w-full max-w-lg mx-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-[#e8702a]" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-3 font-playfair italic">404</h1>

        <h2 className="text-xl font-semibold text-white/70 mb-4">
          Page Not Found
        </h2>

        <p className="text-white/50 mb-10 leading-relaxed max-w-sm mx-auto">
          Sorry, the page you are looking for doesn't exist.
          It may have been moved or deleted.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-[0_0_24px_rgba(232,112,42,0.3)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

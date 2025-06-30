"use client";
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

export default function NotFound() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f8f6f4] to-[#ede8e3] font-sans">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-primary/5 animate-float"
          style={{ top: '10%', left: '10%' }}
        />
        <div 
          className="absolute w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-primary/5 animate-float-delayed-2"
          style={{ top: '60%', right: '15%' }}
        />
        <div 
          className="absolute w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-primary/5 animate-float-delayed-4"
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>

      <div className="max-w-3xl w-[90%] text-center p-6 sm:p-12 m-4 sm:m-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl relative z-10">
        {/* 404 Code */}
        <div className="text-6xl sm:text-9xl font-black text-primary leading-none mb-4 sm:mb-8 animate-float text-shadow">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 sm:mb-6">
          {t.notFound?.title || 'Page Not Found'}
        </h1>

        {/* Message */}
        <p className="text-base sm:text-xl text-gray-600 max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed">
          {t.notFound?.message || "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect."}
        </p>

        {/* Home Button */}
        <Link 
          href="/"
          className={`inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          {t.notFound?.homeButton || 'Go Home'}
          <span className={`transition-transform duration-300 ${
            isRTL ? 'rotate-180' : ''
          }`}>
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
"use client";
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .float-delay-0 {
          animation-delay: 0s;
        }
        
        .float-delay-2 {
          animation-delay: -2s;
        }
        
        .float-delay-4 {
          animation-delay: -4s;
        }
        
        .error-code-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(139, 21, 56, 0.1);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .custom-gradient {
          background: linear-gradient(135deg, #f8f6f4 0%, #ede8e3 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        .error-code {
          font-size: 9rem;
          font-weight: 900;
          color: #8B1538;
          line-height: 0.9;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }
        
        .error-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          padding: 0 1rem;
        }
        
        .error-message {
          font-size: 1.25rem;
          color: #4a5568;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 3rem;
          padding: 0 2rem;
        }
        
        .home-button {
          background: #8B1538;
          font-size: 1.125rem;
          font-weight: 600;
          padding: 1rem 2.5rem;
          box-shadow: 0 6px 20px rgba(139, 21, 56, 0.3);
          transition: all 0.3s ease;
          border-radius: 12px;
        }
        
        .home-button:hover {
          background: #a01e42;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(139, 21, 56, 0.4);
        }
        
        .home-button:active {
          transform: translateY(-1px);
        }
        
        .container-shadow {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .main-container {
          padding: 3rem 2rem;
          margin: 2rem;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        @media (max-width: 640px) {
          .error-code {
            font-size: 6rem;
            margin-bottom: 1.5rem;
            padding: 0 0.5rem;
          }
          
          .error-title {
            font-size: 2.25rem;
            margin-bottom: 1rem;
            padding: 0 0.5rem;
          }
          
          .error-message {
            font-size: 1.125rem;
            margin-bottom: 2rem;
            padding: 0 1rem;
          }
          
          .home-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }
          
          .main-container {
            padding: 2rem 1rem;
            margin: 1rem;
            min-height: 400px;
          }
        }
      `}</style>
      
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden custom-gradient">
        
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-24 h-24 rounded-full float-animation float-delay-0" 
               style={{ 
                 background: 'rgba(139, 21, 56, 0.05)',
                 top: '10%',
                 left: '10%'
               }}>
          </div>
          <div className="absolute w-36 h-36 rounded-full float-animation float-delay-2" 
               style={{ 
                 background: 'rgba(139, 21, 56, 0.05)',
                 top: '60%',
                 right: '15%'
               }}>
          </div>
          <div className="absolute w-20 h-20 rounded-full float-animation float-delay-4" 
               style={{ 
                 background: 'rgba(139, 21, 56, 0.05)',
                 bottom: '20%',
                 left: '20%'
               }}>
          </div>
        </div>

        <div className="max-w-3xl text-center main-container rounded-3xl glass-effect container-shadow relative z-10">
          
          {/* 404 Code */}
          <div className="text-shadow error-code-animation error-code">
            404
          </div>

          {/* Title */}
          <h1 className="error-title">
            Page Not Found
          </h1>

          {/* Message */}
          <p className="error-message mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Home Button */}
          <Link href="/">
            <button className="group inline-flex items-center gap-3 home-button text-white border-none cursor-pointer">
              Go Home
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-lg">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
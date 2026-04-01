'use client';

import { useEffect, useState } from 'react';

export default function ShareButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFacebookShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const fallbackUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
      window.open(fallbackUrl, 'facebook-share-dialog', 'width=800,height=600');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Slóð afrituð!');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="pt-8 border-t border-stone-200">
      <h3 className="text-lg font-bold text-stone-900 mb-4">Deildu þessari færslu</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleFacebookShare}
          className="inline-flex items-center px-5 py-3 bg-[#1877F2] text-white font-medium hover:bg-[#166FE5] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Deila á Facebook
        </button>
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center px-5 py-3 bg-stone-200 text-stone-900 font-medium hover:bg-stone-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Afrita slóð
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { Send as SendIcon } from '@mui/icons-material';

const Newsletter = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl md:p-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 md:max-w-lg">
            <h2 className="text-3xl font-bold sm:text-4xl">Get Travel Inspiration</h2>
            <p className="mt-4 text-lg text-blue-100">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration.
            </p>
          </div>
          
          <form className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
              >
                Subscribe
                <SendIcon />
              </button>
            </div>
            <p className="mt-3 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
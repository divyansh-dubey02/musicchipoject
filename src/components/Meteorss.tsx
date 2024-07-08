'use client'
import React from 'react';
import { Meteors } from './ui/meteors';

function Meteorss() {
  return (
    <div className='w-full h-[45rem] bg-gray-900'>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              placeholder="Your message"
              className="mt-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5} // corrected
              required
            ></textarea>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="px-6 item-center text-center py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Meteors className='' number={200}></Meteors>
    </div>
  );
}

export default Meteorss;

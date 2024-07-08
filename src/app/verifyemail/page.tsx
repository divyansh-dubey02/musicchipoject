// use client
'use client';
import axios, { AxiosError } from 'axios'; // Import AxiosError for type inference
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    const verifyUseremail = async () => {
      try {
        await axios.post("/api/users/verifyemail", { token });
        setVerified(true);
        setError(false);
      } catch (error: any) {
        setError(true);
        console.log((error as AxiosError)?.response?.data); // Access response data safely
      }
    }

    setError(false);
    if (token.length > 0) {
      verifyUseremail();
    }
  }, [token]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col w-[700px] h-[300px] bg-gray-900 rounded-lg border-2 border-white items-center py-2'>
        <h1 className='text-4xl'>Verify Email</h1>
        <h2 className='p-3 bg-orange-500 text-black'>{token ? `${token}` : "No Token"}</h2>
        {verified && (
          <div>
            <h2>Verified</h2>
            <Link href="/login">Go to Login</Link>
          </div>
        )}

        {error && (
          <div>
            <h2>Error</h2>
          </div>
        )}
      </div>
    </div>
  );
}

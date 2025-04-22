// app/verify-subscription/[token]/page.tsx
/*"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VerifySubscription({ params }: { params: { token: string } }) {
  const [message, setMessage] = useState('Verifying your subscription...');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifySubscription = async () => {
      try {
        const response = await fetch(`/api/verify-subscription/${params.token}`, {
          method: 'GET',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }

        setIsSuccess(true);
        setMessage(data.message || 'Subscription verified successfully!');
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Verification failed');
        setIsSuccess(false);
      }
    };

    verifySubscription();
  }, [params.token]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-md"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isSuccess ? 'Subscription Verified!' : 'Verification Failed'}
          </h2>
          <p className={`mb-6 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}*/

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation'; // use this instead of manually passing params

export default function VerifySubscription() {
  const [message, setMessage] = useState('Verifying your subscription...');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const params = useParams(); // ✅ grab token from URL
  const token = params?.token as string;

  useEffect(() => {
    if (!token) return;

    const verifySubscription = async () => {
      try {
        const response = await fetch(`/api/verify-subscription/${token}`, {
          method: 'GET',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }

        setIsSuccess(true);
        setMessage(data.message || 'Subscription verified successfully!');
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Verification failed');
        setIsSuccess(false);
      }
    };

    verifySubscription();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-md"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isSuccess ? 'Subscription Verified!' : 'Verification Failed'}
          </h2>
          <p className={`mb-6 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

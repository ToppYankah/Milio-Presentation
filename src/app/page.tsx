"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import ErrorBoundary from './error';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
      router.push("/dashboard");
  }, [])
  return ( <ErrorBoundary><div></div></ErrorBoundary> );
}

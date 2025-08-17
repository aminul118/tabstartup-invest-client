'use client';
import { Button } from '@/components/ui/button';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center  p-4"
      data-aos="fade-up"
    >
      <div className="w-full max-w-md rounded-lg  p-8 text-center shadow-lg">
        <h2 className="mb-4 text-3xl font-semibold text-red-600">Something Went Wrong</h2>
        <p className="mb-6 text-gray-600">{error.message || 'An unexpected error occurred'}</p>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default GlobalError;

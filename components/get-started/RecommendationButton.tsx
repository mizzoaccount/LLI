"use client";
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';

export function RecommendationButton({
  selectedChallenge,
  recommendedPackage
}: {
  selectedChallenge: boolean;
  recommendedPackage: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (!selectedChallenge) return;
    
    const packageParam = encodeURIComponent(recommendedPackage);
    router.push(`/auth/register?package=${packageParam}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={!selectedChallenge}
      className={`group px-8 py-3 rounded-lg font-semibold flex items-center transition-all ${
        selectedChallenge
          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
          : "bg-gray-200 text-gray-500 cursor-not-allowed"
      }`}
    >
      Register and See
      <FiArrowRight className={`ml-2 transition-transform ${
        selectedChallenge ? "group-hover:translate-x-1" : ""
      }`}/>
    </button>
  );
}
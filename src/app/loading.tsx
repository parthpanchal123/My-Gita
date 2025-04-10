export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-4">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mb-4"></div>
        <p className="text-xl">Loading the wisdom of the Gita...</p>
        <p className="text-sm text-gray-400 mt-2">As Krishna says, patience is a virtue</p>
      </div>
    </div>
  );
} 
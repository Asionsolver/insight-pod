import { Play } from "lucide-react";

const CtaButton = () => {
  return (
    <button className="px-4 py-2 bg-amber-400 text-prime-brown centered-row gap-4 rounded-full mt-4 clash-display">
      Listen Now
      <span className="w-10 h-10 bg-zinc-100 rounded-full center-item">
        <Play />
      </span>
    </button>
  );
};

export default CtaButton;

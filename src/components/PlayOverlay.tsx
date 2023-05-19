import Image from "next/image";
import cns from "classnames";

export const PlayOverlay = ({ className = "" }: { className?: string }) => (
  <div
    className={cns(
      "transition-all absolute inset-0 flex items-center justify-center rounded-lg bg-black/50",
      className
    )}
  >
    <button
      type="button"
      className="flex items-center gap-5 bg-pure-white/25 p-[9px] rounded-[28.5px]"
    >
      <Image src="/play.svg" width="30" height="30" alt="play" />
      <span className="text-xl font-medium">Play</span>
    </button>
  </div>
);

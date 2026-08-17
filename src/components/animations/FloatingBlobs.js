import { cn } from "@/lib/utils";

export default function FloatingBlobs({ className, variant = "default" }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {variant === "default" && (
        <>
          <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob bg-sky-300/30 blur-3xl" />
          <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] animate-blob-slow bg-cyan-300/25 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 animate-blob bg-green-300/20 blur-3xl" />
        </>
      )}
      {variant === "subtle" && (
        <>
          <div className="absolute -top-32 right-0 h-80 w-80 animate-blob-slow bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 animate-blob bg-cyan-200/30 blur-3xl" />
        </>
      )}
    </div>
  );
}

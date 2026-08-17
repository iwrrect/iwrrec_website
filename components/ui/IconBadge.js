import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export default function IconBadge({ icon, className, iconClassName }) {
  const Icon = getIcon(icon);
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded bg-primary text-white",
        className
      )}
    >
      <Icon className={cn("h-6 w-6", iconClassName)} strokeWidth={1.8} />
    </div>
  );
}

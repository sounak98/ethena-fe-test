import Badge from "./Badge";

interface TitleBarProps {
  title: string;
  lastUpdated: Date;
  badgeInfos: { title: string; value: string }[];
}

export default function TitleBar({
  title,
  lastUpdated,
  badgeInfos,
}: TitleBarProps) {
  return (
    <div className="flex items-center px-4 py-2 rounded w-full border e-border-color bg-[rgba(20,24,33,0.60)]">
      <div className="flex flex-1">
        <div className="flex flex-col">
          <div className="text-xl">{title}</div>
          <div className="text-xs text-gray-400">
            Last Updated: {lastUpdated.toLocaleDateString()}{" "}
            {lastUpdated.toLocaleTimeString()}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        {badgeInfos.map((info, i) => (
          <Badge key={i} title={info.title} value={info.value} />
        ))}
      </div>
    </div>
  );
}

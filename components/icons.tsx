import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
  filled = false,
}: IconProps & { children: ReactNode; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className ?? "size-6"}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <Svg className={className ?? "size-4"} filled>
      <path d="M8.2 5.4v13.2L18.8 12 8.2 5.4z" />
    </Svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <Svg className={className} filled>
      <path d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z" />
    </Svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <Svg className={className} filled>
      <path d="M5 6.5v11l8-5.5-8-5.5zM16 6h2.2v12H16z" />
    </Svg>
  );
}

export function VolumeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 10h3l4-3.5v11L7 14H4z" />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5" />
    </Svg>
  );
}

export function CaptionsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 12h3M7 15h2M12 12h5M12 15h3" />
    </Svg>
  );
}

export function SettingsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </Svg>
  );
}

export function MiniplayerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <rect x="11" y="11" width="7" height="5" rx="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function FullscreenIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" />
    </Svg>
  );
}

export function ThumbDownIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M16 14V5h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" />
      <path d="M16 14l-3.2 5.2A2 2 0 0 1 9.2 18V14H6a2 2 0 0 1-2-2.3l1-6A2 2 0 0 1 7 4h9" />
    </Svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 16V5M8 8.5 12 4.5 16 8.5" />
      <path d="M6 13v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" />
    </Svg>
  );
}

export function ClipIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M8 8.2 15.2 11M8 15.8 15.2 13" />
    </Svg>
  );
}

export function SaveIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3.2L6 20V5a1 1 0 0 1 1-1z" />
    </Svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Svg>
  );
}

export function MicIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8" />
    </Svg>
  );
}

export function UploadIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 16V5M8 8.5 12 4.5 16 8.5" />
      <path d="M5 15.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5" />
    </Svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className ?? "size-6"}>
      <circle cx="12" cy="9" r="3.2" fill="currentColor" />
      <path
        d="M5.2 19.5c1.3-3.2 3.6-4.8 6.8-4.8s5.5 1.6 6.8 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m9 5 7 7-7 7" />
    </Svg>
  );
}

export function VerifiedIcon({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className ?? "size-3.5"}
    >
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path
        d="M4.8 8.2 7 10.3l4.3-4.6"
        fill="none"
        stroke="#0f0f0f"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1z" />
    </Svg>
  );
}

export function ShortsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10.2 9.2 14.6 12l-4.4 2.8z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function SubscriptionsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M8 6V4.5A1.5 1.5 0 0 1 9.5 3h9A1.5 1.5 0 0 1 20 4.5V15" />
    </Svg>
  );
}

export function HistoryIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 12a7.5 7.5 0 1 0 2-5" />
      <path d="M4 4.5V8h3.5" />
      <path d="M12 8v4.5l3 1.5" />
    </Svg>
  );
}

export function WatchLaterIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l2.5 1.5" />
    </Svg>
  );
}

export function LikeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 10v9H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z" />
      <path d="M8 10l3.2-5.2A2 2 0 0 1 14.8 6V10H18a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 17 20H8" />
    </Svg>
  );
}

export function PlaylistIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 7h10M5 12h10M5 17h6" />
      <path d="m16 15 4 2.2V13z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function TrendingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 16.5 9.2 11l3.2 3L20 7" />
      <path d="M14 7h6v6" />
    </Svg>
  );
}

export function MusicIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 18V6l10-2v12" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="17" cy="16" r="2.2" />
    </Svg>
  );
}

export function LiveIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8 8.5a5.5 5.5 0 0 0 0 7M16 8.5a5.5 5.5 0 0 1 0 7" />
      <path d="M5.5 6a9 9 0 0 0 0 12M18.5 6a9 9 0 0 1 0 12" />
    </Svg>
  );
}

export function GamingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 9h10a4 4 0 0 1 3.8 5.2l-.8 2.6A2 2 0 0 1 18.1 18c-1.2 0-1.6-1.2-2.2-2.2H8.1C7.5 16.8 7.1 18 5.9 18a2 2 0 0 1-1.9-1.2l-.8-2.6A4 4 0 0 1 7 9z" />
      <path d="M8 12.5h3M9.5 11v3M16 12h.1M18 14h.1" />
    </Svg>
  );
}

export function NewsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 5h11a2 2 0 0 1 2 2v12H7a2 2 0 0 0-2 2V5z" />
      <path d="M5 19a2 2 0 0 0 2 2h11" />
      <path d="M8 9h7M8 13h7" />
    </Svg>
  );
}

export function SportsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 4h10v3a5 5 0 0 1-10 0z" />
      <path d="M7 6H5a3 3 0 0 0 3 3M17 6h2a3 3 0 0 1-3 3M12 12v3M9 20h6M10 15h4l-1 5h-2z" />
    </Svg>
  );
}

export function LearningIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.8.8-1.2 1.5-1.2 2.5H9.2c0-1-.4-1.7-1.2-2.5z" />
    </Svg>
  );
}

export function TravelIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16" />
      <path d="M12 4c2.4 2.2 3.6 5 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-5-3.6-8S9.6 6.2 12 4z" />
    </Svg>
  );
}

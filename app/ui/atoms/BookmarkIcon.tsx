"use client";

type Props = {
  width: number;
  height: number;
  variant: "light" | "dark";
};

export default function BookmarkIcon({ width, height, variant }: Props) {
  return (
    <svg
      width={width + "px"}
      height={height + "px"}
      viewBox="0 0 24 24"
      stroke={variant === "light" ? "#ebebeb" : "#464455"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

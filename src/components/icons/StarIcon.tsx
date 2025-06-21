import React from 'react';

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled = false, className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.5}
    className={`${className} ${filled ? "text-yellow-400" : "text-gray-300"}`}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.479.038.673.724.317 1.05l-4.223 3.822a.563.563 0 00-.162.522l1.285 5.395a.562.562 0 01-.84.61l-4.725-3.05a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.395a.563.563 0 00-.162-.522L3.042 10.447a.562.562 0 01.317-1.05l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

export default StarIcon;

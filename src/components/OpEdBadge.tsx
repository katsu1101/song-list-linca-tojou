// components/GenreBadge.tsx

import {getOpEdColors} from "@/lib/opEdColors";
import React           from "react";

type Props = {
  opEd: string;
  onClick?: (tag: string) => void; // ✅ クリック時にジャンルを渡せる
  onClose?: () => void;
};

const OpEdBadge: React.FC<Props> = ({ opEd, onClick, onClose }) => {
  const genreStyles = getOpEdColors(opEd);

  if (!! onClose) {
    onClose()
  }
  if (!opEd) return null;
  return (
    <span
      className="ml-3 px-2 py-0.5 text-xs rounded-md font-bold leading-none inline-flex
        items-start cursor-pointer whitespace-nowrap transition-all duration-150 hover:opacity-80"
      style={{
        backgroundColor: genreStyles?.background,
        color: genreStyles?.color,
        border: genreStyles?.border || "none",
        boxShadow: genreStyles?.boxShadow || "none",
        fontWeight: "bold",
        lineHeight: "1",
      }}
      onClick={() => onClick && opEd && onClick(opEd)} // ✅ クリック時に `genre` を渡す
    >
      {opEd}
    </span>
  );
};

export default OpEdBadge;

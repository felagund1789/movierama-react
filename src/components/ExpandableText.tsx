import { useState } from "react";

interface Props {
  children: string;
  maxCharacters?: number;
}

const ExpandableText = ({ children, maxCharacters = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const text =
    children.length > maxCharacters && !expanded
      ? `${children.slice(0, maxCharacters)}... `
      : `${children} `;
  const buttonText = expanded ? "Show less" : "Show more";

  return (
    <p>
      {text}
      {children.length > maxCharacters && (
        <button
          style={{ padding: "1px 4px", cursor: "pointer" }}
          onClick={() => setExpanded(!expanded)}
        >
          {buttonText}
        </button>
      )}
    </p>
  );
};

export default ExpandableText;

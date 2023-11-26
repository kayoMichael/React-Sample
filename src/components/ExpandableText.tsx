import { useState } from "react";

interface Properties {
  children: string;
  maxChars?: number;
}
function ExpandableText({ children, maxChars = 100 }: Properties) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p> {children} </p>;
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <p>
      {text}{" "}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
}

export default ExpandableText;

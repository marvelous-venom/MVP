// src/components/ui/ClientCopyButton.tsx
"use client"; // This marks it as a client component

import { useState } from "react";

interface ClientCopyButtonProps {
  textToCopy: string;
}

export const ClientCopyButton: React.FC<ClientCopyButtonProps> = ({
  textToCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className="bg-blue-600 text-white px-3 rounded-r-md hover:bg-blue-700 flex items-center"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

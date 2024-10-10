import { type VariantProps } from "class-variance-authority";
import { CheckIcon, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { codeVariants, copyVariants } from "./helpers";
import { cn } from "../../utils";

interface Props extends VariantProps<typeof codeVariants> {
  code: string;
  showCopy?: boolean;
  className?: string;
}

const Code: React.FC<Props> = ({ code, showCopy, size, color, className }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.warn("Copy failed", error);
    }
  };

  return (
    <div className={cn(codeVariants({ size, color }), className)}>
      <code>{code}</code>
      {showCopy &&
        (copied ? (
          <CheckIcon className={copyVariants({ size })} />
        ) : (
          <CopyIcon className={copyVariants({ size })} onClick={handleCopy} />
        ))}
    </div>
  );
};

export default Code;

import { cn } from "../../utils";

interface Props {
  icon?: React.ReactNode;
  children: React.ReactNode;
  blocked?: boolean;
  className?: string;
}

const BlockUI: React.FC<Props> = ({ icon, blocked = true, children, className }) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      {blocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          {icon}
        </div>
      )}
    </div>
  );
};

export default BlockUI;

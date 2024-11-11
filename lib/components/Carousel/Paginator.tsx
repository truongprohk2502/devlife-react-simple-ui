import { cn } from "../../utils";

interface Props {
  current: number;
  total: number;
}

const Paginator: React.FC<Props> = ({ current, total }) => {
  const currentPage = current >= total - 1 ? total - 1 : current;

  return (
    <div className="absolute bottom-4 inset-x-3 z-[1] gap-2 flex justify-center items-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full shadow-md",
            index === currentPage ? "bg-neutral-200" : "bg-neutral-400"
          )}
        />
      ))}
    </div>
  );
};

export default Paginator;

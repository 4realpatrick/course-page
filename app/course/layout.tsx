import { cn } from "@/lib/utils";
import { bookFont } from "@/lib/font";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("size-full bg-neutral-950", bookFont.className)}>
      {children}
    </div>
  );
};

export default CourseLayout;

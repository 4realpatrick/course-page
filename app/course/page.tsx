"use client";
import { cn } from "@/lib/utils";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  ElementRef,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const Switcher = ({
  orientation,
  onClick,
}: {
  orientation: "left" | "right";
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={cn(
        "absolute h-full w-10 z-10 flex items-center justify-center top-0 mx-2",
        orientation === "right" && "right-0"
      )}
    >
      <div
        className="p-4 rounded-full border border-gray-500 inline-flex items-center justify-center bg-neutral-950 hover:bg-gray-500 cursor-pointer transition-[background]"
        onClick={onClick}
      >
        {orientation === "left" ? (
          <MdArrowBackIos className="size-4 text-white" />
        ) : (
          <MdArrowForwardIos className="size-4 text-white" />
        )}
      </div>
    </div>
  );
};
const CoursePage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<ElementRef<"div">>(null);
  const canSwitch = useCallback(
    (orientation: "left" | "right") => {
      if (orientation === "left") {
        return currentIndex > 0;
      } else {
        return currentIndex < 4 - 3;
      }
    },
    [currentIndex]
  );
  const cards = useMemo(() => {
    return [...new Array(4)].map((_, i) => {
      const Card = lazy(() => import(`./_componets/card${i + 1}`));
      return (
        <Suspense key={i}>
          <Card />
        </Suspense>
      );
    });
  }, []);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="h-[inherit] flex items-center justify-center overflow-hidden">
      <div className="w-4/5 overflow-hidden relative">
        {canSwitch("left") && (
          <Switcher
            orientation="left"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          />
        )}
        <div
          className="relative flex gap-[5%] px-8 py-4 transition-transform"
          ref={containerRef}
          style={{ transform: `translateX(-${currentIndex * 35}%)` }}
        >
          {cards}
        </div>
        {canSwitch("right") && (
          <Switcher
            orientation="right"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default CoursePage;

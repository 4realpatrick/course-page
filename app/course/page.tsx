"use client";
import useMediaQuery from "@/hooks/use-media-query";
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
import { LazyMotion, m, domAnimation } from "framer-motion";

const Switcher = ({
  orientation,
  onClick,
}: {
  orientation: "left" | "right";
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <m.div
      className={cn(
        "absolute h-full w-10 z-10 flex items-center justify-center top-0 mx-2",
        orientation === "right" && "right-0"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
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
    </m.div>
  );
};

const CoursePage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<ElementRef<"div">>(null);
  const isMobile = useMediaQuery();
  const canSwitch = useCallback(
    (orientation: "left" | "right") => {
      if (orientation === "left") {
        return currentIndex > 0;
      } else {
        return currentIndex < 4 - (isMobile ? 1 : 3);
      }
    },
    [currentIndex, isMobile]
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
    <LazyMotion features={domAnimation}>
      <div className="h-[inherit] flex items-center justify-center overflow-hidden">
        <div className="w-full overflow-hidden relative lg:min-w-[1000px] lg:w-4/5">
          {canSwitch("left") && (
            <Switcher
              orientation="left"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            />
          )}
          <m.div
            className={cn(
              "relative flex gap-[5%] px-8 py-4 transition-transform"
            )}
            ref={containerRef}
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 95 : 35)}%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {cards}
          </m.div>
          {canSwitch("right") && (
            <Switcher
              orientation="right"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            />
          )}
        </div>
      </div>
    </LazyMotion>
  );
};

export default CoursePage;

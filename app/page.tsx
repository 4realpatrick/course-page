import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-950 w-screen h-screen flex items-center justify-center">
      <Button>
        <Link href="/course">Course Page</Link>
      </Button>
    </div>
  );
}

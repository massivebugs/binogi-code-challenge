"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center mb-5">
        Something went wrong! Please try again after a short moment.
      </h2>
      <Button onClick={() => reset()}>Reload the Page</Button>
    </main>
  );
}

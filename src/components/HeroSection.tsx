import React from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "./ui/button";

export default function HeroSection() {
  // React.useEffect(() => {
  //   linkRef.current?.click();
  // }, []);

  return (
    <section className="relative pt-17 h-screen overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-2/3 translate-y-2/3 w-1/2 aspect-square bg-primary rounded-full" />
      <div className="absolute bottom-0 right-0 translate-2/3 w-1/2 aspect-square bg-primary rounded-full" />

      <div className="flex flex-col items-center">
        <h1 className="uppercase text-4xl tracking-widest">
          background remover
        </h1>

        <div className="flex items-end gap-4">
          <h1 className="uppercase text-4xl">ultra</h1>
          <LineShadowText className="uppercase italic text-5xl font-bold">
            fast
          </LineShadowText>
        </div>

        <Button className="mt-5 rounded-full">Subscribe now</Button>
      </div>

      <div className="border aspect-video h-1/2 mx-auto shadow-xl"></div>
    </section>
  );
}

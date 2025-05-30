import React from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "./ui/button";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function HeroSection() {
  // React.useEffect(() => {
  //   linkRef.current?.click();
  // }, []);

  return (
    <section className="pt-17 flex flex-col items-center justify-center gap-10 relative h-screen overflow-hidden">
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

      <div className="aspect-video w-full max-w-140 mx-auto shadow-2xl rounded-2xl overflow-hidden">
        <ImgComparisonSlider className="size-full">
          <div slot="first" className="aspect-video">
            <img
              src="/media/1.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </div>
          <div slot="second" className="aspect-video">
            <img
              src="/media/2.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </div>
        </ImgComparisonSlider>
      </div>
    </section>
  );
}

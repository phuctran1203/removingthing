import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "./ui/button";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import CircleLine from "./icons/CircleLine";
import SpringCurve from "./icons/SpringCurve";
import PlusDash from "./icons/PlusDash";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
export default function HeroSection() {
  // React.useEffect(() => {
  //   linkRef.current?.click();
  // }, []);

  return (
    <section className="pt-17 flex flex-col items-center justify-center gap-10 relative h-screen overflow-hidden">
      {/* visual decor */}
      <div className="absolute inset-0 z-0">
        <RetroGrid
          angle={15}
          className="before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-white before:to-transparent"
        />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "-70%" }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0  translate-y-2/3 w-1/2 aspect-square bg-primary rounded-full hover:scale-102 transition ease-out"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "70%" }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 right-0 translate-y-2/3 w-1/2 aspect-square bg-primary rounded-full hover:scale-102 transition ease-out"
      />
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute left-2 top-1/3"
      >
        <CircleLine className="size-18  hover:rotate-45 transition" />
      </motion.div>
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -right-10 top-1/5"
      >
        <SpringCurve className="size-30 hover:-translate-x-1/6 hover:-rotate-10 transition" />
      </motion.div>

      {/* content */}
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <h1 className="uppercase text-4xl tracking-[0.65rem]">
            <TextAnimate animation="slideLeft" by="character" duration={0.4}>
              background remover
            </TextAnimate>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -right-5 bottom-7"
          >
            <motion.div
              animate={{ rotate: [0, 480, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: [0.7, 0, 0.3, 1],
              }}
              className="origin-center"
            >
              <PlusDash className="size-5" />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex items-end gap-4">
          <div className="">
            <h1 className="uppercase text-4xl tracking-[0.65rem]">
              <TextAnimate animation="slideLeft" by="character" delay={0.2}>
                ultra
              </TextAnimate>
            </h1>
          </div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.2 }}
          >
            <LineShadowText className="uppercase italic text-5xl font-bold">
              fast
            </LineShadowText>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Button className="mt-5 rounded-full cursor-pointer">
            Subscribe now
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative aspect-video w-full max-w-140 mx-auto shadow-2xl rounded-2xl overflow-hidden"
      >
        <ImgComparisonSlider className="size-full">
          <div slot="first" className="aspect-video">
            <img
              src="/media/1.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </div>
          <div slot="second" className="aspect-video transparent-image">
            <img
              src="/media/2.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </div>
        </ImgComparisonSlider>
      </motion.div>
    </section>
  );
}

import Image from "next/image";
import { VortexCompo } from "@/components/Vortex";
import ContentImage from "@/components/ContImg"
import { StickyScrollRevealDemo } from "@/components/ScrollReveal";
import { WobbleCardDemo } from "@/components/Wobbling";
export default function Home() {
  return (
    <main className="">
      <VortexCompo />
      <ContentImage
          imageSrc="/2151037178-removebg-preview.webp"  // Ensure this image exists in the /public directory
          imageAlt="Example Image"
          contentHead="Lorem Ispum is the Dummy Text"
          contentPara="This is an example of content alongside an image."
          imageClass="flex justify-center lg:w-1/2"
        />
        <StickyScrollRevealDemo />
        <WobbleCardDemo />
    </main>
  );
}

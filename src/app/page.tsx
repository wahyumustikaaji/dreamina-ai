import AiArt from "@/components/ai-art";
import BlendLayers from "@/components/blend-layers";
import CreateDesign from "@/components/create-design";
import Cta from "@/components/cta";
import FindInspiration from "@/components/find-inspiration";
import ImageSlider from "@/components/image-slider";
import { FooterApp } from "@/components/ui/footer-page";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <section className="bg-black">
      <Navbar/>
      <ImageSlider/>
      <CreateDesign/>
      <AiArt/>
      <BlendLayers/>
      <FindInspiration/>
      <Cta/>
      <FooterApp/>
    </section>
  );
}

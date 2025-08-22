import CreateDesign from "@/components/create-design";
import ImageSlider from "@/components/image-slider";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <section className="bg-black">
      <Navbar/>
      <ImageSlider/>
      <CreateDesign/>
    </section>
  );
}

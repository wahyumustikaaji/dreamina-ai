import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function BlendLayers() {
    return(
        <section className="py-32 w-full">
            <div className="max-w-[1270px] container mx-auto">
                <h3 className="text-[#EBF8FF] font-medium text-5xl text-center tracking-wide">Blend multiple layers of AI <br /> generated images on canvas</h3>
                <p className="text-[#E0F5FF]/60 mt-6 text-center">The canvas feature provides several powerful tools, such as inpaint, for that perfect extra element, expand, to continue the <br /> image beyond the frame; remove, which erases or replacesdistractions. Seamlessly blend multiple elements on the same <br /> canvas, creating unified and harmonious AI art.</p>

                <div className="flex justify-center mt-7">
                    <Button variant="outline" className="bg-transparent text-[#E0F5FF] border-[#E0F5FF] hover:bg-[#E0F5FF] mt-2 py-6 w-80">Try it now</Button>
                </div>

                <Tabs defaultValue="multi" className="w-full">
                    <div className="flex items-center justify-center mt-16">
                    <TabsList className="flex gap-8 bg-transparent">
                        <TabsTrigger
                        value="multi"
                        className="relative text-[#E0F5FF]/60 data-[state=active]:underline data-[state=active]:underline-offset-14 bg-transparent data-[state=active]:text-[#00CAE0] data-[state=active]:font-medium"
                        >
                        Multi-layer editing
                        </TabsTrigger>

                        <TabsTrigger
                        value="precision"
                        className="relative text-[#E0F5FF]/60 data-[state=active]:underline data-[state=active]:underline-offset-14 bg-transparent data-[state=active]:text-[#00CAE0] data-[state=active]:font-medium"
                        >
                        Precision control
                        </TabsTrigger>
                    </TabsList>
                    </div>

                    <TabsContent value="multi">
                        <Image src="/assets/images/blend/project-1.png" alt="multi-layer" className="mx-auto mt-10" width={948} height={526} />
                    </TabsContent>
                    <TabsContent value="precision">
                        <Image src="/assets/images/blend/project-1.png" alt="multi-layer" className="mx-auto mt-10" width={948} height={526} />
                    </TabsContent>
                    </Tabs>
            </div>
        </section>
    )
}
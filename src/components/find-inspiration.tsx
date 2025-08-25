import Image from "next/image";
import { Button } from "./ui/button";

export default function FindInspiration() {
    return(
        <section className="w-full bg-[#111318]">
            <div className="w-full bg-[#111318] relative min-h-[120vh] container mx-auto">
                <div className="py-32 relative z-10">
                    <div className="max-w-[1270px] container mx-auto">
                        <h3 className="text-[#EBF8FF] font-medium text-5xl text-center tracking-wide">Find your inspiration in a sea of <br /> creativity</h3>
                        <p className="text-[#E0F5FF]/60 mt-6 text-center">Explore unlimited inspiration alongside other Dreamina users. Let creativity be inspired by shared excitement and <br /> collaborative genius.</p>

                        <div className="flex justify-center mt-7">
                            <Button variant="outline" className="bg-transparent text-[#E0F5FF] border-[#E0F5FF] hover:bg-[#E0F5FF] mt-2 py-6 w-80">Get inspired</Button>
                        </div>

                    </div>
                </div>
                <div className="w-full absolute bottom-0">
                    <Image src="/assets/images/blend/project-3.svg" alt="inspiration" className="w-full" width={1460} height={618} />
                </div>
            </div>
        </section>
    )
}
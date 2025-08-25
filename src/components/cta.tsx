import { Button } from "./ui/button";

export default function Cta() {
    return(
        <section className="py-32 w-full">
            <div className="max-w-[1270px] container mx-auto">
                <h3 className="text-[#EBF8FF] font-medium text-5xl text-center tracking-wide">Dreamina, the all-in-one AI creative <br /> suite for all your artistic work</h3>

                <div className="flex justify-center mt-7">
                    <Button
                        variant="outline"
                        className="relative text-[#E0F5FF] border-none mt-2 py-6 w-80 hover:bg-white/20
                                bg-[url('/assets/images/background/button.svg')] bg-cover bg-center 
                                bg-black/10 bg-blend-overlay"
                    >
                        Start now
                    </Button>
                </div>
            </div>
        </section>
    )
}
import Image from "next/image";
import { Button } from "./ui/button";

export default function AiArt() {
    return(
        <section>
            <div
                className="w-full bg-no-repeat bg-cover py-32"
                style={{ backgroundImage: "url('/assets/images/background/blue.svg')" }}
                >
                    <div className="max-w-[1270px] container mx-auto">
                        <h2 className="text-[#EBF8FF] font-medium text-5xl text-center">Realize the AI art of your dreams</h2>

                        <div className="grid grid-cols-12 gap-10 mt-26">
                            <div className="flex justify-end col-span-7 mt-40">
                                <Image src="/assets/images/art/art-1.svg" alt="ai-art-1" className="" width={540} height={660} />
                            </div>

                            <div className="col-span-5">
                                <div className="flex items-center gap-1">
                                    <Image src="/assets/images/art/icon.svg" alt="icon" width={16} height={16} />
                                    <p className="text-[#E0F5FF] text-[13px]">Text to image</p>
                                </div>
                                <p className="text-[#E0F5FF] text-md max-w-[360px] mt-4">
                                    Text to image can generate marvelous images from just a simple prompt. It supports creation based on the words of your prompt, has a better semantic understanding to grasp your needs accurately, and will transform abstract trains of thought into visual works of art.
                                </p>

                                <Button variant="outline" className="bg-transparent text-[#E0F5FF] border-[#E0F5FF] hover:bg-[#E0F5FF] mt-10 py-6 w-80">Try it now</Button>

                                <div className="flex justify-end">
                                    <Image src="/assets/images/art/art-2.svg" alt="art 2" className="mt-64" width={370} height={238} />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="flex items-center gap-1">
                                    <Image src="/assets/images/art/icon.svg" alt="icon" width={16} height={16} />
                                    <p className="text-[#E0F5FF] text-[13px]">Image to image</p>
                                </div>
                                <p className="text-[#E0F5FF] text-md max-w-[360px] mt-4">
                                    Creatively transform existing images. Customize them by choosing the key image characteristics to replace the background, associate a style, retain a painting style or pose, and more to meet the creative needs of any scenario.
                                </p>

                                <Button variant="outline" className="bg-transparent text-[#E0F5FF] border-[#E0F5FF] hover:bg-[#E0F5FF] mt-10 py-6 w-80">Try it now</Button>

                                <div className="">
                                    <Image src="/assets/images/art/art-4.svg" alt="art 2" className="mt-96 mx-auto" width={370} height={238} />
                                </div>
                            </div>

                            <div className="col-span-6 mt-40">
                                <Image src="/assets/images/art/art-3.svg" alt="ai-art-1" className="mx-auto" width={400} height={640} />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
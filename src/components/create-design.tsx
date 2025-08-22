"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import clsx from "clsx";

const cardData = [
  {
    id: 1,
    title: "Character design",
    description: "Supporting cartoon character design.",
    image: "/assets/images/slider/character.svg",
    buttonText: "Build design now",
  },
  {
    id: 2,
    title: "Fashion and beauty",
    description: "Offering entertaining options such as personal portraits and avatars.",
    image: "/assets/images/slider/fashion.svg",
    buttonText: "Build design now",
  },
  {
    id: 3,
    title: "Game assets",
    description: "Facilitating the design of game elements.",
    image: "/assets/images/slider/game.svg",
    buttonText: "Build design now",
  },
  {
    id: 4,
    title: "Marketing and advertising",
    description: "Meeting the needs of modern advertising design.",
    image: "/assets/images/slider/marketing.svg",
    buttonText: "Build design now",
  },
  {
    id: 5,
    title: "Content creation",
    description: "Serving the demands of all kinds of social media creators.",
    image: "/assets/images/slider/content.svg",
    buttonText: "Build design now",
  },
  {
    id: 6,
    title: "Product photography",
    description: "Supplying services for the production and design of product images.",
    image: "/assets/images/slider/product.svg",
    buttonText: "Build design now",
  },
]

export default function CreateDesign() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const cardsPerView = 4
    const maxIndex = Math.max(0, cardData.length - cardsPerView)

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    
    return (
        <section className="py-32 w-full">
            <div>
                <div className="max-w-[1270px] container mx-auto">
                    <h1 className="text-[#EBF8FF] font-medium text-5xl leading-14">Create your design, whatever your <br />purpose</h1>
                    <div className="flex items-center justify-between">
                        <p className="text-[#E0F5FF]/60 mt-5">Start with a prompt or just a blank canvas. However you begin, the end result is your design.</p>
                        <div className="flex gap-2">
                            <Button
                            variant="ghost"
                            size="zero"
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="bg-transparent border-0 hover:bg-transparent text-white disabled:opacity-50"
                            >
                            <svg className="rotate-180 size-6" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3416 5.6001C17.1416 8.03431 20.6316 11.9559 22.7639 13.2999H0V14.6999H22.764C20.6316 16.0441 17.1415 19.9658 16.3414 22.4001H17.8271C18.868 19.6861 22.971 15.7055 25.7895 14.8382L26.1333 14.7323V13.2676L25.7898 13.1619C22.9712 12.2947 18.8682 8.31408 17.8271 5.6001H16.3416Z" fill="#EBF8FF"/>
                            </svg>
                            </Button>
                            <Button
                            variant="ghost"
                            size="zero"
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className="bg-transparent border-0 hover:bg-transparent text-white disabled:opacity-50"
                            >
                            <svg className="size-6" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3416 5.6001C17.1416 8.03431 20.6316 11.9559 22.7639 13.2999H0V14.6999H22.764C20.6316 16.0441 17.1415 19.9658 16.3414 22.4001H17.8271C18.868 19.6861 22.971 15.7055 25.7895 14.8382L26.1333 14.7323V13.2676L25.7898 13.1619C22.9712 12.2947 18.8682 8.31408 17.8271 5.6001H16.3416Z" fill="#EBF8FF"/>
                            </svg>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden pl-32 mt-20">
                    <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                    >
                    {cardData.map((card, index) => (
                        <Card
                            key={card.id}
                            className={clsx(
                                "flex-shrink-0 bg-transparent border-white/20 overflow-hidden p-5 flex flex-col", // tambahkan flex + flex-col
                                {
                                "rounded-l-lg rounded-r-none": index === 0,
                                "rounded-r-lg rounded-l-none": index === cardData.length - 1,
                                "rounded-none": index !== 0 && index !== cardData.length - 1,
                                }
                            )}
                            style={{ width: `calc(${100 / cardsPerView}% - 1.125rem)` }}
                            >
                            <div className="relative w-full">
                                <Image
                                src={card.image || "/placeholder.svg"}
                                alt={card.title}
                                className="object-cover"
                                width={342}
                                height={270}
                                />
                            </div>
                            
                            {/* Bungkus konten agar tombol bisa "didorong ke bawah" */}
                            <div className="flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm mb-10 leading-relaxed">{card.description}</p>

                                {/* Spacer untuk mendorong tombol ke bawah */}
                                <div className="flex-grow" />
                                <Button
                                variant="ghost"
                                size="zero"
                                className="text-white hover:text-gray-300 justify-start p-0 h-auto font-normal group"
                                >
                                {card.buttonText}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                            </Card>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
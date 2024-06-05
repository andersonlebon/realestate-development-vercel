"use client";
import Image from 'next/image';


import { LuBed, LuBath } from "react-icons/lu";
import { Avatar } from "@material-tailwind/react";
import { CiShare2 } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";

import { Tooltip, Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

const DataProducts = [
    {
        id: 1,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    },
    {
        id: 2,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    },
    {
        id: 3,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    },
    {
        id: 4,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    },
    {
        id: 5,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    },
    {
        id: 6,
        name: "Name",
        detail: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
        price: "$543",
        status: "sales",
        location: "california, san fran..."

    }
]

const Products = () => {
    return (
        <div className="flex flex-wrap w-5/6 mx-auto justify-between mt-10">
            {
                DataProducts.map((item) => (
                    <Link href="/detail" key={item.id} className="w-[32%] rounded-[.5rem] h-[70dvh] bg-[#fff] mb-4 overflow-hidden">
                        <div className="w-full h-[50%] bg-[#daddeb]">
                            <Carousel
                                className="rounded-xl"
                                navigation={({ setActiveIndex, activeIndex, length }) => (
                                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                        {new Array(length).fill("").map((_, i) => (
                                            <span
                                                key={i}
                                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                                    }`}
                                                onClick={() => setActiveIndex(i)}
                                            />
                                        ))}
                                    </div>
                                )}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                    alt="image 2"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                    alt="image 3"
                                    className="h-full w-full object-cover"
                                />
                            </Carousel>
                        </div>
                        <div className="p-4">
                            <h1 className="text-xl">{item.name}</h1>
                            <h2 className="text-[#5b87ff] text-xl mt-2">{item.price}</h2>
                            <p className="text-xs mt-2 text-[#969696] mb-2">{item.detail}</p>
                            <div className="flex mb-2">
                                <p className="flex items-center mr-6">
                                    <LuBed className="mr-2" />
                                    {item.id}
                                </p>
                                <p className="flex items-center">
                                    <LuBath className="mr-2" />
                                    {item.id}
                                </p>
                            </div>

                            <div className="border-t-cyan-50 border-t-[1px] py-2 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-[2rem] w-[2rem] mr-3" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                                    <h3 className="text-xs font-trabold">User full name</h3>
                                </div>
                                <div className="flex">
                                    <Tooltip content="share">
                                        <div className="border-slate-500 border-[1px] p-2"><CiShare2 /></div>
                                    </Tooltip>

                                    <Tooltip content="add to favorites">
                                        <div className="ml-2 border-slate-500 border-[1px] p-2"><SlLike /></div>
                                    </Tooltip>

                                    <Tooltip content="compare">
                                        <div className="ml-2 border-slate-500 border-[1px] p-2"><FiPlus /></div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Products;
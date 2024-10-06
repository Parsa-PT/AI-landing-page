'use client'
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import Productimg from '@/assets/product-image.png'

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className="container">
          <h2 className="text-5xl md:text-6xl text-white font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
          </h2>
          <p className=" md:text-xl max-w-2xl  mx-auto text-white/70  text-lg tracking-tighter text-center mt-5">
            From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
          </p>
          <div className=" mt-10 flex flex-col lg:flex-row lg:gap-3 lg:justify-between ">
          {tabs.map((item)=>(
            <div className=" border border-white/15 flex p-2.5  lg:flex-1 rounded-xl gap-2.5 items-center mb-3" key={item.title}>
                <div className=" h-12 w-12 border border-white/15 rounded-lg flex items-center justify-center">
                <DotLottiePlayer src={item.icon} autoplay className=" h-5 w-5" />
                </div>
                <div className=" text-white font-medium">{item.title}</div>
                {item.isNew && (
                  <div className=" text-black font-semibold bg-[#8c44ff] rounded-full px-2 text-xs py-0.5">new</div>
                )}
            </div>
          ))}
          </div>

          <div className=" border  border-white/20 p-2.5 mt-3 rounded-lg">
          <div style={{backgroundImage:`url(${Productimg.src})`}} className="  aspect-video bg-cover  "></div>
            {/* <Image src={Productimg} alt="pro" /> */}
          </div>
      </div>
    </section>
  );
};

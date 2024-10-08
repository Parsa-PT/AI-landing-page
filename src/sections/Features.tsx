'use client'
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import Productimg from '@/assets/product-image.png'
import { useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue , motion, animate } from "framer-motion";

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


const FeaturesTab =({item}:any)=>{

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null)

  const handletohover = ()=>{
    if(dotLottieRef.current === null) return
    dotLottieRef.current.seek(0)
    dotLottieRef.current.play()
  }

  const xPercentage = useMotionValue(0)
  const yPercentage = useMotionValue(0)
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`

  useEffect(()=>{
     animate(xPercentage , [0,100,100,0,0] , {
      duration:4,
      repeat:Infinity,
      ease:'linear',
      repeatType:'loop'
     })
     animate(yPercentage , [0,0,100,100,0] , {
      duration:4,
      repeat:Infinity,
      ease:'linear',
      repeatType:'loop'
     })
  },[xPercentage , yPercentage])
  

  return (
    <div  onMouseEnter={handletohover} className=" border relative border-white/15 flex p-2.5  lg:flex-1 rounded-xl gap-2.5 items-center mb-3" key={item.title}>
      <motion.div style={{maskImage}} className=" absolute inset-0 border border-[#A369FF]   -m-px rounded-xl [mask-image:] "></motion.div>
                <div className=" h-12 w-12 border border-white/15  rounded-lg flex items-center justify-center">
                <DotLottiePlayer ref={dotLottieRef} src={item.icon}  className=" h-5 w-5" />
                </div>
                <div className=" text-white font-medium">{item.title}</div>
                {item.isNew && (
                  <div className=" text-black font-semibold bg-[#8c44ff] rounded-full px-2 text-xs py-0.5">new</div>
                )}
        </div>
  )
}

export const Features = () => {

  const backgroundx = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundY = useMotionValue(tabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundpositionX = useMotionTemplate`${backgroundx}% ${backgroundY}%`
  const backgroundpositionSizeX = useMotionTemplate`${backgroundSizeX}% auto`

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
              <FeaturesTab key={item} item={item}/>
          ))}
          </div>

          <div className=" border  border-white/20 p-2.5 mt-3 rounded-lg">
          <motion.div style={{backgroundImage:`url(${Productimg.src})` }} className="  aspect-video bg-cover  "></motion.div>
            
          </div>
      </div>
    </section>
  );
};

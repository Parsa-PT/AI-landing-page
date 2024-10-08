'use client'
import Button from "@/components/Button";
import Star from '@/assets/stars.png'
import grid from '@/assets/grid-lines.png'
import {motion , useScroll , useMotionValueEvent , useTransform, useMotionTemplate, useMotionValue} from 'framer-motion'
import { RefObject, useEffect, useRef } from "react";


const useRelativeMouse = (to:RefObject<HTMLElement>)=>{
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const updateMouse = (event : MouseEvent)=>{
      if(!to.current) return
      const {top , left} = to.current.getBoundingClientRect()
      mouseX.set(event.x - left)
      mouseX.set(event.y - top)
    }

    useEffect(()=>{
      addEventListener('mousemove' , updateMouse)
      return ()=>{
        removeEventListener('mousemove' , updateMouse)
      }
    },[])

    return[mouseX,mouseY]
}

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const borderRef = useRef(null)


  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset: ['start end' , 'end start']
  })

   const backgroundPositionY = useTransform(scrollYProgress , [0,1] , [-300,300])


   const [mouseX,mouseY] = useRelativeMouse(borderRef)

   const imageMask = useMotionTemplate`mask-image:radial-gradient(50% 50% at ${mouseX}% ${mouseY}%,black, transparent)`
  
  return (
    <section ref={sectionRef} className=" py-20 md:py-24">
        <div className="container">
           <motion.div ref={borderRef} animate={{backgroundPositionX:Star.width}} transition={{repeat:Infinity , duration:30 , ease:'linear'}} style={{backgroundImage:`url(${Star.src})` , backgroundPositionY}} className=" rounded-xl overflow-hidden relative border group border-white/15 py-24 ">
           <div className="   inset-0 absolute  bg-[rgb(74,32,138)]  bg-blend-overlay  [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition-all duration-300" style={{backgroundImage:`url(${grid.src})`}}/>
           <motion.div  className="   inset-0 absolute  bg-[rgb(74,32,138)]  bg-blend-overlay  [] opacity-0 group-hover:opacity-100 transition duration-300" style={{backgroundImage:`url(${grid.src})` , maskImage:imageMask}}/>
             <div className=" relative">
                <h2 className=" text-5xl md:text-6xl text-white font-medium text-center tracking-tighter">AI-driven SEO for everyone.</h2>
                  <p className=" md:text-xl max-w-sm  mx-auto text-white/70  text-lg tracking-tighter  px-4 text-center mt-5">Achieve clear, impactful results without the complexity.</p>
                <div className=" flex justify-center items-center mt-8">
                  <Button title="Join waitlist"/>
                </div>
             </div>
           </motion.div>
        </div>
    </section>
  );
};

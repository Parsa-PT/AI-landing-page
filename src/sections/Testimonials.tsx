'use client'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import {motion} from 'framer-motion'

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className=" py-20  md:py-24">
        <div className=" container">
          <h2 className=" text-5xl md:text-6xl text-white font-medium text-center tracking-tighter">Beyond Expectations.</h2>
          <p className=" md:text-xl max-w-sm  mx-auto text-white/70  text-lg tracking-tighter text-center mt-5">Our revolutionary AI SEO tools have transformed our clients strategies.</p>
          <div className=" flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div initial={{translateX:'-50%'}} animate={{translateX:'0'}} transition={{duration:60 , repeat:Infinity , ease:'linear'}} className=" flex gap-5 flex-none pr-5 -translate-x-1/2">
          {[...testimonials , ...testimonials].map((item)=>(
            <div key={item.name} className=" border md:p-10 md:max-w-md md:mx-auto border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.5),black)] max-w-xs  flex-none">
                <div className="  text-white text-lg md:text-2xl tracking-tighter">
                  {item.text}
                </div>
                <div className=" flex  items-center gap-3 mt-5">
                  <div className=" relative  after:content-[''] after:inset-0 after:absolute after:mix-blend-soft-light after:bg-[rgb(140,69,244)]">
                  <Image src={item.avatarImg} alt="avatar" className=" h-11 w-11   rounded-lg  grayscale border border-white/30 "/>
                  </div>
                 <div className=" flex flex-col">
                 <div className="  text-white">
                    {item.name}
                  </div>
                  <div className=" text-white/50 text-sm">
                    {item.title}
                  </div>
                 </div>
                </div>
            </div>
          ))}
          </motion.div>
          </div>
          
        </div>
    </section>
  );
};

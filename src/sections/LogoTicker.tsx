'use client'
import acme from '@/assets/logo-acme.png'
import apex from '@/assets/logo-apex.png'
import celestia from '@/assets/logo-celestial.png'
import quantum from '@/assets/logo-quantum.png'
import pulse from '@/assets/logo-pulse.png'
import echo from '@/assets/logo-echo.png'
import Image from 'next/image'
import {motion , useScroll , useMotionValueEvent , useTransform} from 'framer-motion'

export const LogoTicker = () => {
  return (
    <section className=' py-20 md:py-24'>
        <div className="container">
          <div className=' flex  items-center  gap-5'>
            <div className=' flex-1 md:flex-none'>
              <h2 className=' text-white'>Trusted by top innovative teams</h2>
            </div>
            <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
              <motion.div  initial={{translateX:'-50%'}} animate={{translateX:'0'}} transition={{duration:30 , ease:'linear' , repeat:Infinity}} className=' flex flex-none gap-14 pr-14  -translate-x-1/2'>
                {[apex , acme , celestia , quantum , pulse , echo,apex , acme , celestia , quantum , pulse , echo].map((logo)=>(
                  <Image src={logo.src} key={logo.src} alt='test' width={40} height={40} className='h-6 w-auto'/>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
};

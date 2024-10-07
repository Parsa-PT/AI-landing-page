import Button from "@/components/Button";
import Star from '@/assets/stars.png'
import grid from '@/assets/grid-lines.png'

export const CallToAction = () => {
  return (
    <section className=" py-20 md:py24">
        <div className="container">
           <div style={{backgroundImage:`url(${Star.src})`}} className=" rounded-xl overflow-hidden relative border border-white/15 py-24 ">
           <div className="   inset-0 absolute  bg-[rgb(74,32,138)]  bg-blend-overlay  [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{backgroundImage:`url(${grid.src})`}}/>
             <div className=" relative">
                <h2 className=" text-5xl md:text-6xl text-white font-medium text-center tracking-tighter">AI-driven SEO for everyone.</h2>
                  <p className=" md:text-xl max-w-sm  mx-auto text-white/70  text-lg tracking-tighter  px-4 text-center mt-5">Achieve clear, impactful results without the complexity.</p>
                <div className=" flex justify-center items-center mt-8">
                  <Button title="Join waitlist"/>
                </div>
             </div>
           </div>
        </div>
    </section>
  );
};

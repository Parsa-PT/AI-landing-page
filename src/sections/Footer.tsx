import Logo from "@/assets/lg.svg";
import X from '@/assets/x.svg'
import Instagram from '@/assets/insta.svg'
import Youtube from '@/assets/you.svg'

export const Footer = () => {
  return (
    <footer className=" py-5 border-t border-white/15">
      <div className="container">
          <div className=" flex flex-col lg:flex-row lg:items-center  lg:gap-7 gap-8">
          <div className=" flex gap-2  lg:flex-1 items-center">
          <Logo className="h-8 w-8"/>
          <div className=" text-white font-medium">AI Startup Landing Page</div>
        </div>
        <div>
          <nav className=" flex flex-col  lg:flex-1  lg:flex-row gap-5 ">
            <a className=" text-white/70  hover:text-white text-xs" href="">Features</a>
            <a className=" text-white/70  hover:text-white text-xs"  href="">Developers</a>
            <a className=" text-white/70  hover:text-white text-xs"  href="">Company</a>
            <a className=" text-white/70  hover:text-white text-xs"  href="">Blog</a>
            <a className=" text-white/70  hover:text-white text-xs"  href="">Changelog</a>
          </nav>
        </div>
        <div className=" flex  lg:flex-1 lg:justify-end  gap-5">
          <X className=" text-white/40 hover:text-white transition"/>
          <Instagram className=" text-white/40 hover:text-white  transition"/>
          <Youtube className=" text-white/40 hover:text-white transition"/>
        </div>
          </div>
      </div>
    </footer>
  );
};

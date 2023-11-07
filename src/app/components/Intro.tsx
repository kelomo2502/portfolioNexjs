import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Intro() {
  return (
    <section className="bg-main-background w-full h-auto px-6 bg-mobile-bg relative">
      <div className="pt-[120px] font-creteRound font-normal text-app-orange w-full ">
        <h1 className="creteRound text-[56px]">Hey There.</h1>
        <h2 className="creteRound text-[56px] mt-[-20px]">I’m Kelvin.</h2>
      </div>
      <div className="my-3">
        <p className="text-intro-white font-roboto font-bold text-2xl">
          I&rsquo;m a Software Developer
        </p>
      </div>
      <div className="font-poppins font-normal text-base text-white">
        <p>I can help you build a product , feature </p>
        <p>or website Look through some of my </p>
        <p>work and experience! If you like what you </p>
        <p>see and have a project you need coded,</p>
        <p>don’t hesitate to contact me.</p>
      </div>
      <div className="social-icons mt-3">
        <SocialIcons/>
      </div>

     
        <Image src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/header-mobile.png" alt="mobile-header-img" width={147} height={409} className=" absolute right-0 bottom-[-40px]" />
     

    </section>
  );
}

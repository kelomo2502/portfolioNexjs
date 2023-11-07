import Image from "next/image";

export default function About() {
  return (
    <section className="pt-24 bg-main-background px-6 relative ">
      <h3 className="creteRound text-7xl text-app-orange mb-6">About me</h3>
      <div className="about-text-container text-white font-inter font-normal text-base ">
        <p>Hello I’m a software developer! I can help </p>
        <p>you build a product , feature or website </p>
        <p>Look through some of my work and </p>
        <p>experience! If you like what you see and </p>
        <p>have a project you need coded, don’t </p>
        <p className="pb-6">hesitate to contact me.</p>

        <div className="pb-[200px]">
          <button className="bg-app-orange font-inter font-bold text-[17px] p-3">
            Get my resume
          </button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/about-image.png"
          alt="about-img"
          width={160}
          height={259}
        />
      </div>
    </section>
  );
}

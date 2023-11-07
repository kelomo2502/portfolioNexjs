"use client";

import Image from "next/image";
import { uuid } from "uuidv4";
import { techIcons, workCards } from "../data/data";
export default function RecentWork() {
  console.log(uuid());
  return (
    <section className="w-full px-6 pt-[120px] pb-12">
      <div className="creteRound text-[2.5rem] text-main-background border_bottom  mb-20">
        <h3 className="pb-6">My Recent Works</h3>
      </div>
      <div className="w-full mb-6">
        <Image
          src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/recent-card.png"
          alt="recent-card"
          width={327}
          height={237}
          objectFit="contain"
        />
        <div className="my-6 font-inter font-normal text-base">
          <h4 className="creteRound text-[32px] mb-3 ">Multi-Post Stories</h4>
          <p>A daily selection of privately personalized </p>
          <p>reads; no accounts or sign-ups required. </p>
          <p>has been the industry&rsquo;s standard dummy </p>
          <p>text ever since the 1500s, when an </p>
          <p>unknown printer took a standard dummy text.</p>
        </div>
        <div className="tech-stack-container flex gap-2 mb-3">
          {techIcons.map((icon) => {
            return (
              <div key={uuid()}>
                <Image src={icon.url} alt={icon.name} width={48} height={48} />
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => {}}
          className="bg-app-orange text-white font-inter font-bold text-lg p-3 rounded-lg mb-3 cursor-pointer"
        >
          See project
        </button>

        <div className="work-card">
          {workCards.map((card) => {
            return (
              <div key={uuid()} className="">
                <div>
                  <Image
                    src={card.url}
                    alt="project_png"
                    width={327}
                    height={386}
                  />
                </div>
                <div className="flex py-6 px-2">
                  <button type="button" className="rounded-lg bg-nav-black text-white px-2 font-inter font-semibold text-sm mr-2">Tech Stack</button>
                    {card.techStack.map(tech =>{
                      return <div key={uuid()}>
                        
                        <Image src={tech.techUrl} alt="stack" width={30} height={30} className="mr-4"/>
                      </div>
                    })}
                </div>
                <button onClick={()=>{}} className="bg-app-orange w-full p-3 font-inter font-bold text-white text-lg mb-6 cursor-pointer">See Project</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

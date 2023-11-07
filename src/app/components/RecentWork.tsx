

import Image from "next/image";
import { uuid } from 'uuidv4';
import { techIcons } from "../data/data";
export default function RecentWork() {
  console.log(uuid())
  return (
    <section className="w-full px-6 pt-[120px]">
      <div className="creteRound text-[2.5rem] text-main-background border_bottom  mb-20">
        <h3 className="pb-6">My Recent Works</h3>
      </div>
      <div className="w-full">
        <Image src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/recent-card.png" alt="recent-card" width={327} height={237} objectFit="contain"/>
        <div className="my-6 font-inter font-normal text-base">
          <h4  className="creteRound text-[32px] mb-3 ">Multi-Post Stories</h4>
          <p>A daily selection of privately personalized </p>
          <p>reads; no accounts or sign-ups required. </p>
          <p>has been the industry&rsquo;s standard dummy </p>
          <p>text ever since the 1500s, when an </p>
          <p>unknown printer took a standard dummy text.</p>
        </div>
        <div className="tech-stack-container flex gap-2">
          {techIcons.map(icon =>{
            return <div key={uuid()}>
              <Image src={icon.url} alt={icon.name} width={48} height={48}/>
            </div>
          })}
        </div>
      </div>

    </section>
  );
}

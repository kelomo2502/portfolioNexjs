import Image from "next/image";
export default function RecentWork() {
  return (
    <section className="w-full px-6 pt-[120px]">
      <div className="creteRound text-[2.5rem] text-main-background border_bottom  mb-20">
        <h3 className="pb-6">My Recent Works</h3>
      </div>
      <div className="w-full">
        <Image src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/recent-card.png" alt="recent-card" width={327} height={237} objectFit="contain"/>
      </div>

    </section>
  );
}

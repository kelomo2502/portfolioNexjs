import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className=" bg-main-background">
      <div className="footer footer-top px-6">
        <div className="top text-white mb-8 pt-32">
          <div className="flex justify-center gap-2 items-center mb-11">
            <div>
              <Image
                src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/diamond.png"
                alt="diamond"
                width={18}
                height={18}
              />
            </div>
            <div className="text-white">
              <h3 className="font-roboto font-bold text-[32px]">Language</h3>
            </div>
          </div>
          <div className="text-center font-inter font-normal text-[22px]">
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="mid text-white mb-8">
          <div className="flex justify-center gap-2 items-center mb-11">
            <div>
              <Image
                src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/rectangle.png"
                alt="diamond"
                width={18}
                height={18}
              />
            </div>
            <div className="text-white">
              <h3 className="font-roboto font-bold text-[32px]">Frameworks</h3>
            </div>
          </div>
          <div className="text-center font-inter font-normal text-[22px]">
            <p>NextJS</p>
            <p>ReactJS</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>Mongoose</p>
            <p>Jest</p>
            <p>Cypress</p>
          </div>
        </div>
        <div className="bottom text-white pb-16">
          <div className="flex justify-center gap-2 items-center mb-11">
            <div>
              <Image
                src="https://raw.githubusercontent.com/kelomo2502/git_assets/main/circle.png"
                alt="diamond"
                width={18}
                height={18}
              />
            </div>
            <div className="text-white">
              <h3 className="font-roboto font-bold text-[32px]">Skills</h3>
            </div>
          </div>
          <div className="text-center font-inter font-normal text-[22px]">
            <p>Web Development</p>
            <p>Version Control</p>
            <p>Responsive Design</p>
            <p>Database Management</p>
            <p>CLI</p>
            <p>API Design</p>
            <p>Testing</p>
            <p>Agile Practices</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-white px-6 pt-[69px] pb-[78px] ">
        <div className="font-inter font-bold text-[32px] text-footer-neutral mb-16">
          <p>I&rsquo;m always </p>
          <p>interested in hearing </p>
          <p>about new projects, </p>
          <p>so if you&rsquo;d like to </p>
          <p>chat please get in </p>
          <p>touch.</p>
        </div>
        <div className="footer-form">
          <form className="w-full flex flex-col gap-4 font-inter font-normal text-[15px]">
            <input
              type="text"
              placeholder="Full name"
              className=" px-4 py-3 text-input-gray footer_border_bottom outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="  px-4 py-3 text-input-gray footer_border_bottom outline-none"
            />
            <textarea
              name=""
              className=" px-4 py-3 italic text-nav-black outline-none mb-6"
            >
              Write me something...
            </textarea>
            <button
              type="submit"
              className="font-inter font-bold text-[17px] text-white p-3 bg-app-orange w-[131px] block mx-auto rounded-[8px]"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
      <div className="social-icons footer_border_top bg-black test">
           <SocialIcons/>
      </div>
      
    </footer>
  );
}

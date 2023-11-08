import Intro from "./components/Intro";
import RecentWork from "./components/RecentWork";
import About from "./components/About";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <section>
      <Intro/>
      <RecentWork/>
      <About/>
      <Footer/>
    </section>
  )
}

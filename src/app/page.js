import AboutSection from "./component/about";
import ContactSection from "./component/contact";
import HomeSection from "./component/home";
import Navbar from "./component/navbar";
import ProjectSection from "./component/project";
import SkillSection from "./component/skill";


export default function Home() {
  return (
    <main className="bg-[#212121] flex min-h-screen flex-col">
     <Navbar />
     <div className="container mx-auto px-12 py-4 flex justify-center items-center h-screen overflow-x-hidden" id="home">
        <HomeSection />
     </div>
     <div className="px-12 py-4 bg-[#212121] h-screen flex justify-center items-center">
      <AboutSection />
     </div>
     <div className="px-12 py-4 bg-[#212121] h-screen flex justify-center items-center">
      <SkillSection />
     </div>
     <div className="px-12 py-4 bg-[#212121] h-screen flex justify-center items-center">
      <ProjectSection />
      </div>
     <div className="px-12 py-4 bg-[#212121] h-screen flex justify-center items-center">
      <ContactSection />
     </div>
    </main>
  );
}

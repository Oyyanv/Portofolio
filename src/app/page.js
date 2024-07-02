import AboutSection from "./component/about";
import HomeSection from "./component/home";
import Navbar from "./component/navbar";


export default function Home() {
  return (
    <main className="bg-[#F1F6F9] flex min-h-screen flex-col">
     <Navbar />
     <div class="container mx-auto px-12 py-4 flex justify-center items-center h-screen" id="home">
        <HomeSection />
     </div>
     <div className="px-12 py-4 bg-[#9BA4B4] h-screen flex justify-center items-center">
      <AboutSection />
     </div>
    </main>
  );
}

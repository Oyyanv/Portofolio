import SectionPlace from "./component/home";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <main className="bg-[#F1F6F9] flex min-h-screen flex-col">
     <Navbar />
     <div class="container mx-auto px-12 py-4 flex justify-center items-center h-screen">
        <SectionPlace />
     </div>
    </main>
  );
}

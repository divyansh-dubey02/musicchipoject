import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Whychooseus from "@/components/Whychooseus";
import MovingCards from "@/components/MovingCards";
import UpcomingWebenars from "@/components/UpcomingWebenars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">

      <Herosection />
      <FeaturedCourses/>
      < Whychooseus/>
      <MovingCards/>
      <UpcomingWebenars/>
      <Instructors/>
      <Footer/>
  
    </main>
  );
}

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Results } from "@/components/Results";
import { Programs } from "@/components/Programs";
import { Features } from "@/components/Features";
import { Reviews } from "@/components/Reviews";
import { Pricing } from "@/components/Pricing";
import { Trainers } from "@/components/Trainers";
import { ReservationForm } from "@/components/ReservationForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Results />
        <Programs />
        <Features />
        <Reviews />
        <Pricing />
        <Trainers />
        <ReservationForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}

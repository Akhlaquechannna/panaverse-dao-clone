import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero"


export default function Home() {
  return (
    <>
      <main>
        {/* <h1 className="text-red-400" >Hello world</h1> */}
        {/* Hero Section */}
        <Hero />
        {/* CoreTracks sections */}
        <CoreTracks/>
      </main>
    </>
  );
}

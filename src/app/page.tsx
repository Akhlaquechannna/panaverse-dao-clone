import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero"
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";


export default function Home() {
  return (
    <>
      <main>
        {/* <h1 className="text-red-400" >Hello world</h1> */}
        {/* Hero Section */}
        <Hero />
        {/* CoreTracks sections */}
        <CoreTracks/>
        {/* Specialized Track */}
        <SpecializedTrack />
        {/* outcome section */}
        <ProgramOutcome />
      </main>
    </>
  );
}

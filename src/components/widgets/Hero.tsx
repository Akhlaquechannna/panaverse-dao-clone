import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/images/Hero-Poster.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-teal-800 font-bold text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl font-bold leading-0 mt-4">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-6 text-lg text-slate-700">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <button className="flex pl-7 pr-7 pt-4 pb-4 mt-7 rounded-full text-lg text-white bg-teal-800">Learn more</button>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

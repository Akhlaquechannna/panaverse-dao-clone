import Wrapper from "@/components/shared/Wrapper";
import Botton from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const SpecializedTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* header */}
        <div>
          <h2 className="text-3xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 sm:text-1xl text-xl text-slate-700">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex gap-x-4 gap-x-8 ">
          {/* Content left */}
          <div className="shadow-xl basis-8/12 rounded-2xl flex-1 border border-slate-200 px-8 py-8 ">
            <h4 className="text-teal-700 text-lg ">Specialized Program</h4>
            <h3 className="text-2xl font-bold ">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-2 ">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">
              Learn more
              <svg
                className="mb-1"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex gap-4 mt-8">
              <QuarterBox
                header="Quarter IV"
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                number={4}
                haveBorder={false}
              />
              <QuarterBox
                header="Quarter V"
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                number={5}
                haveBorder={false}
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="px-4 flex gap-x-4 items-center py-6 basis-4/12 bg-slate-300 flex-1">
            <div className="px-4 flex gap-x-4 items-center cursor-pointer">
              <div>
                <div className="w-20 h-16 rounded bg-red-400"></div>
              </div>
              <div>
                <h4 className="text-primary font-medium">
                  Specialized Program
                </h4>
                <h3 className="text-xl font-semibold">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h3>
              </div>
            </div>
            <div className="px-4 flex gap-x-4 items-center cursor-pointer">
              <div>
                <div className="w-20 h-16 rounded bg-red-400"></div>
              </div>
              <div>
                <h4 className="text-primary font-medium">
                  Specialized Program
                </h4>
                <h3 className="text-xl font-semibold">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h3>
              </div>
            </div>
            {/* under Line */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;

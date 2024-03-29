import Wrapper from "@/components/shared/Wrapper";
import Botton from "@/components/shared/Button";
import QuarterBox from "@/components/shared/QuarterBox";

export const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II ",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-30 ">
      <Wrapper>
        {/* content */}
        <div className="max-w-lg">
          <h4 className="text-teal-700 font-bold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-3xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 sm:text-1xl text-xl text-slate-700">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Botton text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-10 py-16">
          {CoreTrackData.map((item, i) => (
            <QuarterBox
              key={item.number}
              header={item.header}
              description={item.description}
              number={i + 1}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;

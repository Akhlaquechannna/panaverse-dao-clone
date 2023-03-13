import Wrapper from "@/components/shared/Wrapper";
import Botton from "@/components/shared/Button";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section className="mt-16 lg:mt-30 ">
      <Wrapper>
        {/* content */}
        <div className="max-w-lg">
          <h4 className="text-teal-700 font-bold text-lg mt-4">Program of Studies</h4>
          <h2 className="text-3xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 sm:text-1xl text-xl text-slate-700">Every participant of the program will start by completing the following three core courses:</p>
          <div className="mt-4">
            <Botton text="Learn More"/>
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex gap-x-4 ">
          <div className="border rounded-md w-4/12 relative px-8 py-12 ">
            <h4 className="font-bold text-lg">Quarter I</h4>
            <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using TypeScript</p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">1</div>
          </div>
          <div className="border rounded-md w-4/12 relative px-8 py-12 ">
            <h4 className="font-bold text-lg">Quarter 2</h4>
            <p className="mt-2 text-slate-600">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">2</div>
          </div>
          <div className="border rounded-md w-4/12 relative px-8 py-12 ">
            <h4 className="font-bold text-lg">Quarter I</h4>
            <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using TypeScript</p>
            <div className="absolute text-gray-200 top-0 right-10 text-9xl font-bold -z-10">1</div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;

"use client";

import Wrapper from "@/components/shared/Wrapper";
import Botton from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";
import Image from "next/image";
//images
import web3img from "@/assets/images/metaverse.webp";
import AiImg from "@/assets/images/ai.webp";
import CncImg from "@/assets/images/Cloud.webp"
import iotImg from "@/assets/images/iot.webp"
import gbImg from "@/assets/images/genom.webp"
import npaImg from "@/assets/images/network.webp"
import { useState } from "react";

export const ProgramsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    Image: web3img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    Image: AiImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    Image: CncImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "iot",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    Image: iotImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "gb",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    Image: gbImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npa",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    Image: npaImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const SpecializedTrack = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = ProgramsData.find(
    (item) => item.slug === selectedItem
  );

  console.log(selectedItem);

  return (
    <section>
      <Wrapper>
        {/* header */}
        <div>
          <h2 className="text-3xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-1xl text-xl text-slate-700 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex gap-x-6 lg:flex-row flex-col-reverse gap-y-7">
          {/* Content left */}
          <div className="shadow-xl sticky top-28 self-start  basis-8/12 rounded-2xl = border border-slate-200 px-8 py-8 ">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold ">{selectedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-2 ">
              {selectedItemData?.description}
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
            <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* Content Right */}
          <div className="px-4 space-y-4 gap-x-4 items-center py-6 basis-4/12 bg-slate-300 flex-1">
            {ProgramsData.map((item, i) => {
              return (
                <div
                  onClick={() => setSelectedItem(item.slug)}
                  key={item.slug}
                  className="px-4 flex gap-x-4 items-center cursor-pointer "
                >
                  <div className="flex-shrink-0 h-24 w-32">
                    {/* <div className="w-20 h-16 rounded bg-red-400"></div> */}
                    <Image
                      src={item.Image}
                      alt={item.header}
                      className={"h-24 object-cover rounded-md"}
                    />
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">
                      Specialized Program
                    </h4>
                    <h3 className="text-md font-semibold">{item.header}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;

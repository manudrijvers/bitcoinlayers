import React from "react";
import { RISK_FACTOR_CATEGORIES } from "@/constants";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const RiskAnalysis: React.FC<{ section: any; riskFactors: string[] }> = ({ section, riskFactors }) => {
  const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
      case "Low":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "High":
        return "text-red-600";
      default:
        return ""; // not sure about default
    }
  };

  return (
    <>
      {section.content.map((content: any, contentIndex: number) => (
        <div key={contentIndex} className="flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="body_section">{RISK_FACTOR_CATEGORIES[contentIndex]}</div>
            <div className="h-8 justify-end items-center gap-2 flex">
              <div className={`${getRiskColorClass(riskFactors[contentIndex])} text-sm font-medium leading-tight`}>
                {riskFactors[contentIndex]} risk
              </div>
              <div className="w-8 h-8 justify-center items-center flex">
                <div className={`w-8 h-8 bg-${riskFactors[contentIndex].toLowerCase()}-100 rounded-full`}></div>
                <div className={`text-center text-${riskFactors[contentIndex].toLowerCase()}-600 text-base font-bold font-['Hack']`}>{contentIndex + 1}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="grow shrink basis-0 body_subsection">{content.title}</div>
            </div>
            <div className="self-stretch">{parseTextWithLinks(content.content)}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RiskAnalysis;

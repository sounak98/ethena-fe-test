"use client";

import { activePlatforms, collateralData } from "./data";
import { useMemo } from "react";

export default function CollateralTable() {
  const totalSum = useMemo(() => {
    return Object.keys(collateralData).reduce((acc, collateral) => {
      return (
        acc +
        activePlatforms.reduce((acc, platform) => {
          return acc + collateralData[collateral][platform];
        }, 0)
      );
    }, 0);
  }, []);

  const platformPercentages = useMemo(() => {
    const ret = {};
    activePlatforms.forEach((platform) => {
      ret[platform] = Object.keys(collateralData)
        .map((collateral) => {
          return collateralData[collateral][platform] / totalSum;
        })
        .reduce((acc, percentage) => acc + percentage, 0);
    });
    return ret;
  }, [totalSum]);

  const collateralPercentages = useMemo(() => {
    const ret = {};
    Object.keys(collateralData).forEach((collateral) => {
      ret[collateral] = activePlatforms
        .map((platform) => {
          return collateralData[collateral][platform] / totalSum;
        })
        .reduce((acc, percentage) => acc + percentage, 0);
    });
    return ret;
  }, [totalSum]);

  return (
    <div className="mt-4 border border-white border-opacity-5 rounded overflow-hidden bg-[rgba(20,24,33,0.6)]">
      <table className="w-full text-center text-sm table-fixed divide-y divide-white divide-opacity-5">
        <thead className="h-10">
          <tr className="font-semibold">
            <td />
            {activePlatforms.map((platform, i) => (
              <td key={i} className="">
                {platform}{" "}
                <span className="text-gray-400 ml-2 text-xs font-normal">
                  {(platformPercentages[platform] * 100).toFixed(2)}%
                </span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white divide-opacity-5">
          {Object.keys(collateralData).map((collateral, i) => (
            <tr
              key={i}
              className="h-10 odd:bg-[rgba(29,31,40,0.2)] even:bg-[rgba(27,35,48,0.2)]"
            >
              <td className="font-semibold">
                {collateral}
                <span className="text-gray-400 ml-2 text-xs font-normal">
                  {(collateralPercentages[collateral] * 100).toFixed(2)}%
                </span>
              </td>
              {activePlatforms.map((platform, j) => (
                <td key={j}>
                  $
                  {Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(collateralData[collateral][platform])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

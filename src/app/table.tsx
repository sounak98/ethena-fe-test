import { activePlatforms, collateralData } from "./data";

export default function CollateralTable() {
  return (
    <div className="mt-4 border border-white border-opacity-5 rounded overflow-hidden bg-[rgba(20,24,33,0.6)]">
      <table className="w-full text-center text-sm table-fixed divide-y divide-white divide-opacity-5">
        <thead className="h-10">
          <tr className="font-semibold">
            <td />
            {activePlatforms.map((platform, i) => (
              <td key={i} className="">
                {platform}
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
              <td className="font-semibold">{collateral}</td>
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

import TitleBar from "@/components/TitleBar";
import CollateralTable from "./table";

const badgeInfos = [
  { title: "Collateral Yield", value: "2.85%" },
  { title: "Collateral Notional", value: "127.47M" },
];

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex w-[1200px] min-h-screen flex-col items-center py-24">
        <TitleBar
          title="Collateral"
          lastUpdated={new Date()}
          badgeInfos={badgeInfos}
        />
        <CollateralTable />
      </div>
    </main>
  );
}

import Image from "next/image";
import React from "react";
import { type FixturesResponse } from "~/schemas/fixture";

interface FixtureLine {
  fixtureData: FixturesResponse;
  showStatus?: boolean;
}

export const FixtureLine: React.FC<FixtureLine> = ({
  fixtureData: { fixture, goals, league, score, teams },
  showStatus = false,
}) => {
  const localizedDate = new Date(fixture.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <section className="inline-grid w-full grid-cols-wideCenter rounded-xl border-2 border-theme-500 bg-theme-800 px-4 py-2 text-gray-200">
      <span className="flex gap-2">
        <Image
          className="max-h-8"
          src={league.logo}
          alt={"Football team logo"}
          width="30"
          height={"30"}
          style={{ objectFit: "contain" }}
        />
        <span className="my-auto truncate">{league.name}</span>
      </span>
      <span className="mx-auto inline-grid w-full grid-cols-thinCenter">
        <div className="ml-auto flex gap-2">
          <span className="my-auto">{teams.home.name}</span>
          <Image
            className="max-h-8"
            src={teams.home.logo}
            alt={"Football home team logo"}
            width={"32"}
            height={"32"}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="mx-auto my-auto flex gap-2">
          {goals.home ?? "0"} : {goals.away ?? "0"}
        </div>

        <div className="mr-auto flex gap-2">
          <Image
            className="max-h-8"
            src={teams.away.logo}
            alt={"Footbal away team logo"}
            width={"32"}
            height={"32"}
            style={{ objectFit: "contain" }}
          />
          <span className="my-auto">{teams.away.name}</span>
        </div>
      </span>

      <div className="my-auto ml-auto flex gap-2">
        {showStatus ? (
          <span className="font-bold text-red-400">{fixture.status.long}</span>
        ) : (
          <span className="">{localizedDate}</span>
        )}
      </div>
    </section>
  );
};

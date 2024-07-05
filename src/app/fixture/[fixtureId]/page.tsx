import React from "react";
import { type FixturesResponse } from "~/schemas/fixture";
import { api } from "~/trpc/server";
import Image from "next/image";

interface FixturePage {
  params: {
    fixtureId: string;
  };
}

async function FixturePage({ params }: FixturePage) {
  const fixtureId = parseInt(params.fixtureId);

  const fixtureResponse: FixturesResponse[] = await api.get.getFixtureById({
    fixtureIds: [fixtureId],
  });

  if (!fixtureResponse[0])
    return (
      <>
        <div>This fixture is missing. Try again later</div>
      </>
    );

  const { fixture, goals, league, score, teams } = fixtureResponse[0];

  return (
    <>
      <main className="flex w-full items-center justify-center ">
        <article className="mt-32 flex w-fit gap-16">
          <div className="relative h-48 w-full min-w-48">
            <Image
              src={teams.home.logo}
              alt={"Football team logo"}
              style={{ objectFit: "contain", top: 0, left: 0 }}
              fill
            />
          </div>
          <div className="text-nowrap text-7xl text-gray-300">
            {goals.home} : {goals.away}
          </div>
          <div className="relative h-48 w-full min-w-48">
            <Image
              src={teams.home.logo}
              alt={"Football team logo"}
              style={{ objectFit: "contain", top: 0, left: 0 }}
              fill
            />
          </div>
        </article>
      </main>
    </>
  );
}

export default FixturePage;

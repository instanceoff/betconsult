import { api } from "~/trpc/server";
import { FixtureLine } from "./_components/FixtureLine";
import { type FixturesResponse } from "~/schemas/fixture";
import Navbar from "./_components/navbar";
import React, { Children } from "react";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const fixtures: FixturesResponse[] = await api.get.getSomeFixtures();
  return (
    <>
      <Navbar />
      <main className="w-full">
        <article className="bg-theme-900 mx-auto my-5 flex w-full max-w-7xl flex-col gap-2 rounded-lg p-5 ">
          {fixtures.map((fixture, index, fixtures) => {
            if (index == 0) {
              const curDate = new Date(
                fixture.fixture.date,
              ).toLocaleDateString();

              return (
                <>
                  <FixturesDate key={curDate + index + 1} date={curDate} />
                  <FixtureLine
                    key={fixture.fixture.id + 1}
                    fixtureData={fixture}
                  />
                </>
              );
            }

            const curDate = new Date(fixture.fixture.date).toLocaleDateString();
            const prevDate = new Date(
              fixtures[index - 1]?.fixture.date ?? curDate,
            ).toLocaleDateString();
            if (curDate != prevDate)
              return (
                <>
                  <FixturesDate key={curDate + index} date={curDate} />
                  <FixtureLine
                    key={fixture.fixture.id + 2}
                    fixtureData={fixture}
                  />
                </>
              );

            return (
              <FixtureLine key={fixture.fixture.id + 3} fixtureData={fixture} />
            );
          })}
        </article>
      </main>
    </>
  );
}

const FixturesDate = ({ date }: { date: string }) => {
  return (
    <span className="flex w-full justify-center text-gray-300">{date}</span>
  );
};

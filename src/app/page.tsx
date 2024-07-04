import { api } from "~/trpc/server";
import { type FixturesResponse } from "~/schemas/fixture";
import React from "react";
import FixturesList from "./_components/FixturesList";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const fixtures: FixturesResponse[] = await api.get.getNextFixtures();
  return (
    <>
      <main className="w-full">
        <article className="mx-auto my-5 flex w-full max-w-7xl flex-col gap-2 rounded-lg bg-theme-900 p-5 ">
          <FixturesList fixtures={fixtures} separateByDate={true} />
        </article>
      </main>
    </>
  );
}

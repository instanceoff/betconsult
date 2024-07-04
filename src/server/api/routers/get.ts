import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type FixturesResponse } from "~/schemas/fixture";
import { getFixtureById, getNextFixtures } from "~/utils/apiRequests";
import { z } from "zod";

export const getRouter = createTRPCRouter({
  getNextFixtures: publicProcedure.query(
    async (): Promise<FixturesResponse[]> => {
      return await getNextFixtures();
    },
  ),
  getFixtureById: publicProcedure
    .input(z.object({ fixtureIds: z.number().array() }))
    .query(async ({ input }): Promise<FixturesResponse[]> => {
      return await getFixtureById(input.fixtureIds);
    }),
});

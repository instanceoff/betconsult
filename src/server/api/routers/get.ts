import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type FixturesResponse } from "~/schemas/fixture";
import { getNextFixtures } from "~/utils/apiRequests";

export const getRouter = createTRPCRouter({
  getSomeFixtures: publicProcedure.query(
    async (): Promise<FixturesResponse[]> => {
      return await getNextFixtures();
    },
  ),
});

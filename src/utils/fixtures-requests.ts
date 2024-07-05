import { type FixturesResponse, FixturesSchema } from "../schemas/fixture";
import { createResponseSchema } from "./schema-helper";
import { sendGetRequestToApi } from "./api-preferences";

export async function getNextFixtures(
  amount?: number,
): Promise<FixturesResponse[]> {
  const rawRes = await sendGetRequestToApi(`fixtures?next=${amount ?? 50}`);
  const schema = createResponseSchema(FixturesSchema);
  return schema.parse(await rawRes.json()).response;
}

export async function getLeagues() {
  const rawRes = await sendGetRequestToApi("leagues?current=true");
  const schema = createResponseSchema(FixturesSchema);
  return schema.parse(await rawRes.json()).response;
}

export async function getFixturesByLeagues() {
  return;
}

export async function getInPlayFixtures() {
  return;
}

export async function getFixtureById(fixtureIds: number[]) {
  const rawRes = await sendGetRequestToApi(
    `fixtures?ids=${fixtureIds.join("-")}`,
  );
  const schema = createResponseSchema(FixturesSchema);
  return schema.parse(await rawRes.json()).response;
}

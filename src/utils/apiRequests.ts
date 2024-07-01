import { env } from "~/env";
import {
  type FixturesResponse,
  FixturesResponseSchema,
} from "../schemas/fixture";
import { createResponseSchema } from "~/schemas/response";

const myHeaders = new Headers();

myHeaders.append("x-rapidapi-key", env.RAPIDAPI_KEY);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  next: {
    revalidate: 86400,
  },
};
const sendGetRequestToApi = async (
  request: string,
  additionalReuqestOptions?: Partial<RequestInit>,
) => {
  return fetch(`https://v3.football.api-sports.io/${request}`, {
    ...requestOptions,
    ...additionalReuqestOptions,
  });
};
export async function getSomeFixtures(): Promise<FixturesResponse[]> {
  const rawRes = await sendGetRequestToApi(
    "fixtures?status=1H-HT-2H-ET-BT-P-SUSP-INT-LIVE&last=20",
  );
  const schema = createResponseSchema<typeof FixturesResponseSchema>(
    FixturesResponseSchema,
  );
  return schema.parse(await rawRes.json()).response;
}

export async function getLeagues() {
  const rawRes = await sendGetRequestToApi("leagues?current=true");
  const schema = createResponseSchema<typeof FixturesResponseSchema>(
    FixturesResponseSchema,
  );
  return schema.parse(await rawRes.json()).response;
}

export async function getFixturesByLeagues() {
  return;
}

export async function getInPlayFixtures() {
  return;
}

export async function getNextFixtures() {
  return;
}

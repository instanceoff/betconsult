import { env } from "~/env";

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

export const sendGetRequestToApi = async (
  request: string,
  additionalReuqestOptions?: Partial<RequestInit>,
) => {
  return fetch(`https://v3.football.api-sports.io/${request}`, {
    ...requestOptions,
    ...additionalReuqestOptions,
  });
};

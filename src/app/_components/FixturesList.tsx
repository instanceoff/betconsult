import React from "react";
import { type FixturesResponse } from "~/schemas/fixture";
import { FixtureLine } from "./FixtureLine";

interface FixturesList {
  fixtures: FixturesResponse[];
  separateByDate?: boolean;
}

const FixturesList: React.FC<FixturesList> = ({
  fixtures,
  separateByDate = false,
}) => {
  const getLocalizedFixtureDate = (fixture: FixturesResponse) =>
    new Date(fixture.fixture.date).toLocaleDateString();

  // TODO: make some 'no content' component
  if (!fixtures) return <div>There is no content</div>;

  if (!separateByDate)
    return (
      <>
        {fixtures.map((fixture) => (
          <FixtureLine key={fixture.fixture.id + 3} fixtureData={fixture} />
        ))}
      </>
    );

  return (
    <>
      {fixtures.map((fixture, index, fixtures) => {
        const curDate = getLocalizedFixtureDate(fixture);
        // TODO: do something with this ckeck
        const prevDate = getLocalizedFixtureDate(
          fixtures[index - 1] ?? fixture,
        );

        if (index == 0 || curDate != prevDate)
          return (
            <FixtureLineWithDate
              key={curDate + index}
              fixture={fixture}
              date={curDate}
            />
          );

        return (
          <FixtureLine key={fixture.fixture.id + 3} fixtureData={fixture} />
        );
      })}
    </>
  );
};

interface FixtureLineWithDate {
  fixture: FixturesResponse;
  date: string;
}

const FixtureLineWithDate = ({ fixture, date }: FixtureLineWithDate) => {
  return (
    <>
      <span className="flex w-full justify-center text-gray-300">{date}</span>
      <FixtureLine key={fixture.fixture.id + 2} fixtureData={fixture} />
    </>
  );
};

export default FixturesList;

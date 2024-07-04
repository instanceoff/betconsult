import { z } from "zod";

export const FixtureSchema = z.object({
  id: z.number(),
  referee: z.string().nullable(),
  timezone: z.string(),
  date: z.string().datetime({ offset: true }),
  timestamp: z.number(),
  periods: z.object({
    first: z.number().nullable(),
    second: z.number().nullable(),
  }),
  venue: z.object({
    id: z.number().nullable(),
    name: z.string().nullable(),
    city: z.string().nullable(),
  }),
  status: z.object({
    long: z.string(),
    short: z.string(),
    elapsed: z.number().nullable(),
  }),
});
export type Fixture = z.infer<typeof FixtureSchema>;

export const LeagueSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  logo: z.string(),
  flag: z.string().nullable(),
  season: z.number(),
  round: z.string(),
});
export type League = z.infer<typeof LeagueSchema>;

export const TeamSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string(),
  winner: z.boolean().nullable(),
});
export type Team = z.infer<typeof TeamSchema>;

export const TeamsSchema = z.object({
  home: TeamSchema,
  away: TeamSchema,
});
export type Teams = z.infer<typeof TeamsSchema>;

export const GoalsSchema = z.object({
  home: z.number().nullable(),
  away: z.number().nullable(),
});
export type Goals = z.infer<typeof GoalsSchema>;

export const ScoreByTimeSchema = z.object({
  home: z.number().nullable(),
  away: z.number().nullable(),
});
export type ScoreByTime = z.infer<typeof ScoreByTimeSchema>;

export const ScoreSchema = z.object({
  halftime: ScoreByTimeSchema,
  fulltime: ScoreByTimeSchema,
  extratime: ScoreByTimeSchema,
  penalty: ScoreByTimeSchema,
});
export type Score = z.infer<typeof ScoreSchema>;

export const FixturesSchema = z.object({
  fixture: FixtureSchema,
  league: LeagueSchema,
  teams: TeamsSchema,
  goals: GoalsSchema,
  score: ScoreSchema,
});
export type FixturesResponse = z.infer<typeof FixturesSchema>;

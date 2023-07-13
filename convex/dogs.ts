import { mutation, query } from "./_generated/server";

export const get = query(async ({ db }) => {
  return await db.query("dogs").collect();
});

export const addDog = mutation(async ({db}, {name, score, image}) => {
  return await db.insert("dogs", {name, score, image});
});
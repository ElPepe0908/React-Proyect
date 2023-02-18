import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPulishers = ["DC Comics", "Marvel Comics"];
  if (!validPulishers.includes(publisher)) {
    throw new Error(`${publisher} does not exist :(`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

import __cheatsheets from "./jsons/__cheatsheets.json";
import { DEMO_CATEGORIES } from "./taxonomies";
import { PostDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";

// FOR MAIN DEMO
const DEMO_CHEATSHEETS = __cheatsheets.map((cheatsheet): PostDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categories = cheatsheet.categoriesId.map(
    (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...cheatsheet,
    author: DEMO_AUTHORS.filter((user) => user.id === cheatsheet.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

export { DEMO_CHEATSHEETS };

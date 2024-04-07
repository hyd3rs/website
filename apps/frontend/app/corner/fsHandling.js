import { readdir } from "fs/promises";
import { cache } from "react";
import { join, dirname } from "path";

let blacklist = ["layout.js", "page.js"];

export const getAllPosts = cache(async () => {
  const posts = await readdir(join(process.cwd() + "/app/corner/p"));

  let mapped = await Promise.all(
    posts.map(async (p) => {
      if (blacklist.includes(p)) return undefined;
      const imp = await import(`./p/${p}/page.mdx`).catch((e) => {
        return {
          context: {},
        };
      });

      if (
        !imp.context?.title ||
        !imp.context?.author ||
        !imp.context?.timestamp
      )
        return undefined;

      if (imp.context?.hidden) return false;

      return {
        ...imp.context,
        slug: p,
      };
    })
  );

  return mapped
    .filter((p) => p !== undefined)
    .filter((p) => typeof p == "object")
    .sort(
      (a, b) =>
        new Date(b?.updated || b?.timestamp) -
        new Date(a?.updated || a?.timestamp)
    );
});

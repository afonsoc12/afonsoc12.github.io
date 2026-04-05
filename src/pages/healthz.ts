import type { APIRoute } from "astro";
import { version } from "../../package.json";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      version: `v${version}+${__COMMIT_SHA__}`,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": "inline",
      },
    },
  );
};

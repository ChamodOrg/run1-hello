import type { RequestHandler } from "msw";

// hello-webapp has no API dependency, so there is nothing to mock. Any /api
// call is answered 501 by mock/browser.ts. State held here would live in the
// page and reset on every full load.
export const handlers: RequestHandler[] = [];

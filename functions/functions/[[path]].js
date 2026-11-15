// Cloudflare Pages serves every file in the repo, including this functions/ folder.
// This route sits in front of /functions/* so the server code and the age-restricted
// lesson content in functions/_content/ can never be downloaded as plain files.
export const onRequest = () => new Response("Not found", { status: 404 });

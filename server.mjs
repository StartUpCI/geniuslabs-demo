import { createServer } from "node:http";

const VERSION = "3";
const PORT = parseInt(process.env.PORT || "3000", 10);

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><title>Démo GeniusLabs</title>
<style>body{font-family:sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;background:#f7faf8;color:#1e293b}
main{text-align:center}h1{color:#16a34a}p{color:#64748b}</style></head>
<body><main>
<h1>Mon App a été déployée avec GeniusLabs.</h1>
<p>Version ${VERSION}</p>
</main></body></html>`);
}).listen(PORT, "0.0.0.0", () => {
  console.log(`demo en écoute sur ${PORT}`);
});

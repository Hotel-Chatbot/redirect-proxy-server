import fastify from "fastify";
const server = fastify();
server.get("/:url", (req, res) => {
  res.redirect(req.params.url);
});
async function main() {
  try {
    server.listen({ port: 3000, host: "0.0.0.0" }, (err, addr) => {
      if (err) {
        console.err(err);
        server.log.error(err);
        process.exit(1);
      }
    });
    console.log("server is running on port 3000");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
main();

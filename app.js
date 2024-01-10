import fastify from "fastify";
const server = fastify();
server.get("")
async function main(){
    try {
        await server.listen(3000,"0.0.0.0");
        console.log("server is running on port 3000")
       
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
main();
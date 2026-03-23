import { client } from "./client.js";

async function init (){
    // queue implimentation
    await client.lpush("messages", "10" )
    await client.lpush("messages", "11" )
    await client.lpush("messages", "12" )
    await client.lpush("messages", "13" )
    await client.lpush("messages", "14" )

    //const result= await client.rpop("messages");
    // const result= await client.brpop("messages",10);
    // console.log("Result", result)
    const result= await client.lrange("messages", 0,1)
    console.log("Result", result)
    await client.del("messages")

    // can be done similar for stack


}
init()
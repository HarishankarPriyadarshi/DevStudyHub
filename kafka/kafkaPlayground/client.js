import { Kafka } from "kafkajs";
import dotenv from 'dotenv'
dotenv.config()

const ip=process.env.IP_ADDRESS;
console.log("ip",ip)

export const kafka= new Kafka({
    clientId:"my-app",
    brokers:["ip:9092"]
});

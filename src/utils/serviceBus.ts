import { logger } from "./logger";
import { ServiceBusClient } from "@azure/service-bus"

const connectionString = process.env["AZURE_SERVICEBUS_LOCAL_CONNECTION_STRING"];
export type QUEUE = "sb-test-2";

export default class serviceBusPublisher {

    async publish(message: any, queuename: QUEUE) {
        const sbClient = new ServiceBusClient(connectionString)
        const sender = sbClient.createSender(queuename)

        try {
            await sender.sendMessages({ body: message})
            await sender.close()
        } catch (error) {
            logger.error(`ServiceBusClient Error:  ${error.message}`)
        } finally {
            await sbClient.close();
        }




    }
}
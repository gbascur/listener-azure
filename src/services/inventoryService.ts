import { InventoryModel } from "../interfaces/inventoryModel";
import { logger } from "../utils/logger";
import ServiceBusPublisher from "../utils/serviceBus";

export class Inventory {
    serviceBus: ServiceBusPublisher;
    constructor(
        serviceBus: ServiceBusPublisher
    ){
        this.serviceBus = serviceBus;
    }
    public async execute(data: InventoryModel[]){
        try {
            logger.info(`Enviando data del producto a la cola sb-test-2 ${JSON.stringify(data)}`)

            await this.serviceBus.publish(data, "sb-test-2")

        } catch (error) {
            logger.error(`[SERVICES/EXECUTE]-> Error Details: ${error.message}`)
            throw error;
        }

    }
}
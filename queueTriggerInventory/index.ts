import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { InventoryModel } from "../src/interfaces/inventoryModel";
import { Inventory } from "../src/services/inventoryService";
import serviceBusPublisher from "../src/utils/serviceBus";

const queueTrigger: AzureFunction = async function (context: Context, item: any): Promise<void> {
   const model: InventoryModel[] = item;

   const useCase = new Inventory(
    new serviceBusPublisher(),
   );

   await useCase.execute(model)
   


};

export default queueTrigger;
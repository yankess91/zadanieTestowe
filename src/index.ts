import { ServicePrice4Year } from "./Model/DTOs/ServicePrice4Year";
import { deselectRelatedServices, canAddService } from "./Helpers/updateSelectedServicesHelper";
import { applyDiscounts } from "./Helpers/discountsHelper";
import { servicePrice4YearDataTable } from "./Model/Data/servicePrice4YearDataTable";

export type ServiceYear = 2020 | 2021 | 2022;
export type ServiceType = "Photography" | "VideoRecording" | "BlurayPackage" | "TwoDayEvent" | "WeddingSession";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
) => {
    switch (action.type)
    {      
        case 'Select':
            {
                let newSelectedServices = new Set(previouslySelectedServices);

                if (canAddService(action.service, newSelectedServices))
                {
                    newSelectedServices.add(action.service);     
                }
                
                return Array.from(newSelectedServices);
            }
        case 'Deselect':
            {
                let newSelectedServices = new Set(previouslySelectedServices);
                newSelectedServices.delete(action.service);
                deselectRelatedServices(newSelectedServices);
                
                return Array.from(newSelectedServices);  
            }                   
        default:
            return previouslySelectedServices;
    }
};



export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
    let totalPrice : number = 0;
    let discounts : number[] = [0];

    //caluclate base price 
    selectedServices.forEach((x : ServiceType) => {
        let singlePrice = servicePrice4YearDataTable.find((y : ServicePrice4Year) => {
            return (y.service === x && y.year === selectedYear)
        }).price

        totalPrice += singlePrice !== undefined ? singlePrice : 0;
    })

    applyDiscounts(selectedServices,selectedYear,discounts);

    let priceWithDiscounts : number = totalPrice;

    discounts.forEach((x : number) => priceWithDiscounts -= x);

    return ({ basePrice: totalPrice, finalPrice: priceWithDiscounts });
} 



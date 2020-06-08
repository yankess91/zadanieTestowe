import { ServiceType } from "..";

export const canAddService = (service : ServiceType, serviceList : Set<ServiceType>) : boolean => 
{
    if (service === "BlurayPackage" && !serviceList.has("VideoRecording")) 
    {
        return false
    }
    else if (service === "TwoDayEvent" && !serviceList.has("VideoRecording") && !serviceList.has("Photography")) 
    {
        return false;
    }
    else
    {
        return true;
    }
} 

export const deselectRelatedServices = (selectedServices : Set<ServiceType>) => 
{
    if (!selectedServices.has("Photography") && !selectedServices.has("VideoRecording"))
    {
        selectedServices.delete("TwoDayEvent");
    }
}
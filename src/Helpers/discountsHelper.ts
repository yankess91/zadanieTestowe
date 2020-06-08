import { ServiceType, ServiceYear } from "..";

export const applyDiscounts = (selectedServices : ServiceType[], selectedYear : ServiceYear, discounts : number[]) =>{

    applyVideoAndPhotoDiscount(selectedServices,selectedYear,discounts);
    applyWeddingSessionsDisount(selectedServices,selectedYear,discounts);
}

export const applyVideoAndPhotoDiscount = (selectedServices : ServiceType[], selectedYear : ServiceYear, discounts : Number[]) =>{
    if ((selectedServices.indexOf("Photography")) > -1 && (selectedServices.indexOf("VideoRecording") > -1))
    {
        switch(selectedYear)
        {
            case 2020:
                discounts.push(1200);
                break;
            case  2021:
                discounts.push(1300);
                break;
            case 2022:
                discounts.push(1300);
                break;
        }
    }
}

export const applyWeddingSessionsDisount = (selectedServices : ServiceType[], selectedYear : ServiceYear, discounts : number[]) =>{
    if (((selectedServices.indexOf("Photography") > -1) || (selectedServices.indexOf("VideoRecording") > -1)) 
    && (selectedServices.indexOf("WeddingSession") > -1))
    {
        (selectedYear === 2022 && (selectedServices.indexOf("Photography") > -1) ) ? discounts.push(600) : discounts.push(300);
    }
}

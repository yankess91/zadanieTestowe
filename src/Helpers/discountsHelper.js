"use strict";
exports.__esModule = true;
exports.applyWeddingSessionsDisount = exports.applyVideoAndPhotoDiscount = exports.applyDiscounts = void 0;
exports.applyDiscounts = function (selectedServices, selectedYear, discounts) {
    exports.applyVideoAndPhotoDiscount(selectedServices, selectedYear, discounts);
    exports.applyWeddingSessionsDisount(selectedServices, selectedYear, discounts);
};
exports.applyVideoAndPhotoDiscount = function (selectedServices, selectedYear, discounts) {
    if ((selectedServices.indexOf("Photography")) > -1 && (selectedServices.indexOf("VideoRecording") > -1)) {
        switch (selectedYear) {
            case 2020:
                discounts.push(1200);
                break;
            case 2021:
                discounts.push(1300);
                break;
            case 2022:
                discounts.push(1300);
                break;
        }
    }
};
exports.applyWeddingSessionsDisount = function (selectedServices, selectedYear, discounts) {
    if (((selectedServices.indexOf("Photography") > -1) || (selectedServices.indexOf("VideoRecording") > -1))
        && (selectedServices.indexOf("WeddingSession") > -1)) {
        (selectedYear === 2022 && (selectedServices.indexOf("Photography") > -1)) ? discounts.push(600) : discounts.push(300);
    }
};

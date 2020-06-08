"use strict";
exports.__esModule = true;
exports.deselectRelatedServices = exports.canAddService = void 0;
exports.canAddService = function (service, serviceList) {
    if (service === "BlurayPackage" && !serviceList.has("VideoRecording")) {
        return false;
    }
    else if (service === "TwoDayEvent" && !serviceList.has("VideoRecording") && !serviceList.has("Photography")) {
        return false;
    }
    else {
        return true;
    }
};
exports.deselectRelatedServices = function (selectedServices) {
    if (!selectedServices.has("Photography") && !selectedServices.has("VideoRecording")) {
        selectedServices["delete"]("TwoDayEvent");
    }
};

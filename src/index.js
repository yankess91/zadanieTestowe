"use strict";
exports.__esModule = true;
exports.calculatePrice = exports.updateSelectedServices = void 0;
var updateSelectedServicesHelper_1 = require("./Helpers/updateSelectedServicesHelper");
var discountsHelper_1 = require("./Helpers/discountsHelper");
var servicePrice4YearDataTable_1 = require("./Model/Data/servicePrice4YearDataTable");
exports.updateSelectedServices = function (previouslySelectedServices, action) {
    switch (action.type) {
        case 'Select':
            {
                var newSelectedServices = new Set(previouslySelectedServices);
                if (updateSelectedServicesHelper_1.canAddService(action.service, newSelectedServices)) {
                    newSelectedServices.add(action.service);
                }
                return Array.from(newSelectedServices);
            }
        case 'Deselect':
            {
                var newSelectedServices = new Set(previouslySelectedServices);
                newSelectedServices["delete"](action.service);
                updateSelectedServicesHelper_1.deselectRelatedServices(newSelectedServices);
                return Array.from(newSelectedServices);
            }
        default:
            return previouslySelectedServices;
    }
};
exports.calculatePrice = function (selectedServices, selectedYear) {
    var totalPrice = 0;
    var discounts = [0];
    //caluclate base price 
    selectedServices.forEach(function (x) {
        var singlePrice = servicePrice4YearDataTable_1.servicePrice4YearDataTable.find(function (y) {
            return (y.service === x && y.year === selectedYear);
        }).price;
        totalPrice += singlePrice !== undefined ? singlePrice : 0;
    });
    discountsHelper_1.applyDiscounts(selectedServices, selectedYear, discounts);
    var priceWithDiscounts = totalPrice;
    discounts.forEach(function (x) { return priceWithDiscounts -= x; });
    return ({ basePrice: totalPrice, finalPrice: priceWithDiscounts });
};

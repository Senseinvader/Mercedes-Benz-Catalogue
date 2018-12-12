export default class CarModel {

    constructor(modelId, configurationId, price, currency, interiorDesc, exteriorDesc, fuelConsumption, power, powerUnit, capacity, capacityUnit, topSpeed, topSpeedUnit) {
        this.modelId = modelId;
        this.configurationId = configurationId;
        this.price = price;
        this.currency = currency;
        this.interiorDesc = interiorDesc;
        this.exteriorDesc = exteriorDesc;
        this.fuelConsumption = fuelConsumption;
        this.power = power;
        this.powerUnit = powerUnit;
        this.capacity = capacity;
        this.capacityUnit= capacityUnit;
        this.topSpeed = topSpeed;
        this.topSpeedUnit = topSpeedUnit;
    }
}

export const getCarModel = (model) => {
    return new CarModel(
        model.modelId,
        model.configurationId,
        model.configurationPrice.price,
        model.configurationPrice.currency,
        model.vehicleComponents[0].description,
        model.vehicleComponents[1].description,
        model.technicalInformation.engine.fuelEconomy.fuelConsumptionCombinedMin,
        model.technicalInformation.engine.powerHp.value,
        model.technicalInformation.engine.powerHp.unit,
        model.technicalInformation.engine.capacity.value,
        model.technicalInformation.engine.capacity.unit,
        model.technicalInformation.engine.topSpeed.value,
        model.technicalInformation.engine.topSpeed.unit,
    );
};
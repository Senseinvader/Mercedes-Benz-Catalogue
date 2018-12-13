export default class CarModel {

    constructor(modelId, configurationId, price, currency,
                exteriorDesc, interiorDesc, fuelConsumption, fuelConsumptionUnit, power,
                powerUnit, capacity, capacityUnit, topSpeed, topSpeedUnit,
                acceleration, accelerationUnit, interPhotoUrl, outerPhotoUrl) {
        this.modelId = modelId;
        this.configurationId = configurationId;
        this.price = price;
        this.currency = currency;
        this.exteriorDesc = exteriorDesc;
        this.interiorDesc = interiorDesc;
        this.fuelConsumption = fuelConsumption;
        this.fuelConsumptionUnit = fuelConsumptionUnit;
        this.power = power;
        this.powerUnit = powerUnit;
        this.capacity = capacity;
        this.capacityUnit= capacityUnit;
        this.topSpeed = topSpeed;
        this.topSpeedUnit = topSpeedUnit;
        this.acceleration = acceleration;
        this.accelerationUnit = accelerationUnit;
        this.interPhoto = interPhotoUrl;
        this.outerPhoto = outerPhotoUrl;
    }
}

export const getCarModel = (model) => {
    return new CarModel(
        model.modelId,
        model.configurationId,
        model.configurationPrice.price,
        model.configurationPrice.currency,
        model.vehicleComponents[0].description,         //exterior description
        model.vehicleComponents[1].description,         //interior description
        model.technicalInformation.engine.fuelEconomy.fuelConsumptionCombinedMin.value,
        model.technicalInformation.engine.fuelEconomy.fuelConsumptionCombinedMin.unit,
        model.technicalInformation.engine.powerHp.value,
        model.technicalInformation.engine.powerHp.unit,
        model.technicalInformation.engine.capacity.value,
        model.technicalInformation.engine.capacity.unit,
        model.technicalInformation.engine.topSpeed.value,
        model.technicalInformation.engine.topSpeed.unit,
        model.technicalInformation.engine.acceleration.value,
        model.technicalInformation.engine.acceleration.unit,
        model.interPhotoUrl,
        model.outerPhotoUrl
    );
};
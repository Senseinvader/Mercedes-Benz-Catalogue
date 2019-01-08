export default class CarModel {

    constructor(modelId, configurationId, price, currency,
                power, powerUnit, capacity, capacityUnit, topSpeed, topSpeedUnit,
                acceleration, accelerationUnit, interPhotoUrl, outerPhotoUrl) {
        this.modelId = modelId;
        this.configurationId = configurationId;
        this.price = price;
        this.currency = currency;
        // this.exteriorDesc = exteriorDesc;
        // this.interiorDesc = interiorDesc;
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
    console.log(model);
    return new CarModel(
        model.modelId,
        model.configurationId,
        model.configurationPrice.price,
        model.configurationPrice.currency,
        // model.vehicleComponents[0].description,         //exterior description
        // model.vehicleComponents[1].description,         //interior description
        model.technicalInformation.engine.powerHp.value,
        model.technicalInformation.engine.powerHp.unit,
        model.technicalInformation.engine.capacity.value,
        model.technicalInformation.engine.capacity.unit,
        model.technicalInformation.topSpeed.value,
        model.technicalInformation.topSpeed.unit,
        model.technicalInformation.acceleration.value,
        model.technicalInformation.acceleration.unit
    );
};
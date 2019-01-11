export default class CarModel {

    constructor(modelId, configurationId, price, currency, doors, seats, vehicleComponents,
                power, powerUnit, capacity, capacityUnit, cylinder, emissionStandard, topSpeed, topSpeedUnit,
                acceleration, accelerationUnit, interPhotoUrl, outerPhotoUrl) {
        this.modelId = modelId;
        this.configurationId = configurationId;
        this.price = price;
        this.currency = currency;
        this.doors = doors;
        this.seats = seats;
        this.vehicleComponents = vehicleComponents;
        this.power = power;
        this.powerUnit = powerUnit;
        this.capacity = capacity;
        this.capacityUnit= capacityUnit;
        this.cylinder = cylinder;
        this.emissionStandard = emissionStandard;
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
        model.technicalInformation.doors,
        model.technicalInformation.seats,
        model.vehicleComponents,         //array of configuration components
        model.technicalInformation.engine.powerHp.value,
        model.technicalInformation.engine.powerHp.unit,
        model.technicalInformation.engine.capacity.value,
        model.technicalInformation.engine.capacity.unit,
        model.technicalInformation.engine.cylinder,
        model.technicalInformation.engine.emissionStandard,
        model.technicalInformation.topSpeed.value,
        model.technicalInformation.topSpeed.unit,
        model.technicalInformation.acceleration.value,
        model.technicalInformation.acceleration.unit
    );
};
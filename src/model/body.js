export default class Body {

    constructor(bodyId, bodyName) {
        this.bodyId = bodyId;
        this.bodyName = bodyName;
    }
}

export const getBodiesList = (bodies) => {
    let bodiesList = [];
    bodies.forEach(element => {
        let body = new Body(element.bodyId, element.bodyName);
        bodiesList.push(body);
    });
    return bodiesList;
}
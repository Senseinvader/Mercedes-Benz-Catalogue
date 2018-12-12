export default class CarModelSnippet {

    constructor(modelId, modelName) {
        this.modelId = modelId;
        this.modelName = modelName;
    }
}

export const getModelSnippettsList = (modelSnippets) => {
    let modelSnippetsList = [];
    modelSnippets.forEach(element => {
        let modelSnippet = new CarModelSnippet(element.modelId, element.name);
        modelSnippetsList.push(modelSnippet);
    });
    return modelSnippetsList;
}
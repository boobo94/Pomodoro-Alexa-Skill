export const Debug = {
    canHandle(handler) {
        console.log(JSON.stringify(handler, null, 2));

        return false;
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .getResponse();
    }
};

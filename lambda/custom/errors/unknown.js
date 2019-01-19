export const Unknown = {
    canHandle() {
        return true;
    },
    handle(handler, error) {
        console.log(`Error handled: ${error.message}`);

        const { t } = handler.attributesManager.getRequestAttributes();
        const speechText = t('UNKNOWN_ERROR');

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};

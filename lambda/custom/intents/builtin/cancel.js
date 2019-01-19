
import { IsIntentType } from '../helpers';

export const Cancel = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.CancelIntent')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        const speechText = t("GOODBYE");

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withShouldEndSession(true)
            .getResponse();
    },
};

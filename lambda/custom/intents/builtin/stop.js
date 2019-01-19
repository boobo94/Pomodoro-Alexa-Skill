
import { IsIntentType } from '../helpers';

export const Stop = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.StopIntent')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        const speechText = t("STOP");

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};

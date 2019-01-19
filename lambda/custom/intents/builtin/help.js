
import { IsIntentType } from '../helpers';

export const Help = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.HelpIntent')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        const speechText = t("HELP");

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};

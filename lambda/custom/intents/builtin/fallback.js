
import { IsIntentType } from '../helpers';

export const Fallback = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.FallbackIntent')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();

        return handler.responseBuilder
            .speak(t("INCOMPREHENSIBLE"))
            .reprompt(t("INCOMPREHENSIBLE_REPROMT"))
            .getResponse();
    },
};

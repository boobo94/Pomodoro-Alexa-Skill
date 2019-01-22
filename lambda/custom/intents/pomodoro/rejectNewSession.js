import { IsIntentType } from '../helpers';
import { states } from './constants';

export const RejectNewSession = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.NoIntent')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        const attributes = handler.attributesManager.getSessionAttributes()
        const speechText = t("REJECT_SESSION")

        attributes.state = states.DONE

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
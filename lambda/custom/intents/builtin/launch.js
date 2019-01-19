
import { IsIntentType } from '../helpers';

export const Launch = {
  canHandle(handler) {
    return IsIntentType(handler, 'LaunchRequest')
  },
  handle(handler) {
    const { t } = handler.attributesManager.getRequestAttributes();
    const speechText = t("WELCOME");

    return handler.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(speechText, speechText)
      .getResponse();
  },
};

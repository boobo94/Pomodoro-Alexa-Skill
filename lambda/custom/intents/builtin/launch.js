
export const Launch = {
  canHandle(handler) {
    return handler.requestEnvelope.request.type === 'LaunchRequest'
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

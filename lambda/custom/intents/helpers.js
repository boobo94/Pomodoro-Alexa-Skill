/**
 * @IsIntentType - Check the intent type of handler
 * @param {object} handler - Intent's handler
 * @param {string} intentName - The name of intent
 */
export const IsIntentType = (handler, intentName) => {
  return handler.requestEnvelope.request.type === 'IntentRequest' &&
    handler.requestEnvelope.request.intent.name === intentName;
};

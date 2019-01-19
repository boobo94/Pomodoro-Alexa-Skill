/**
 * @IsIntentType - Check the intent type of handler
 * @param {object} handler - Intent's handler
 * @param {string} intentType - The handler type
 */
export const IsIntentType = (handler, intentType) => {
  return handler.requestEnvelope.request.type === intentType;
};

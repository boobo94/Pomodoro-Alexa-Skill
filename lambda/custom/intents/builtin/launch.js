import { StartIntent } from '../pomodoro/startIntent';
export const Launch = {
  canHandle(handler) {
    return handler.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle(handler) {
    return StartIntent.handle(handler)
  },
};

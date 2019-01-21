import moment from 'moment'
import { IsIntentType } from '../helpers';
import { addPause } from './helper'
import { shortBreakM, shortBreakS, sessionDurationM } from './constants';

export const PassedTimeIntent = {
    canHandle(handler) {
        return IsIntentType(handler, 'PassedTimeINTENT')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        const { startTime } = handler.attributesManager.getSessionAttributes()

        // calculate the time elapsed
        const start = moment.unix(startTime)
        const elapsedSeconds = moment().diff(start, 'seconds')
        // calculate remaining time
        const remainingSeconds = moment.duration(sessionDurationM, 'minutes').subtract(elapsedSeconds, "seconds").asSeconds()

        const speechText = `${t("PASSED_TIME", start.toNow(true))} 
                            ${addPause(remainingSeconds)} 
                            ${t("ENDING_SESSION", `${shortBreakM} ${t("MINUTES")}`)} 
                            ${addPause(shortBreakS)} 
                            ${t("NEW_SESSION")}`
        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
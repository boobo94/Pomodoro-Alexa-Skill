import moment from 'moment'
import { IsIntentType } from '../helpers';
import { addBreaks } from './helper'

export const PassedIntent = {
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
        const remainingSeconds = moment.duration(25, 'minutes').subtract(elapsedSeconds, "seconds").asSeconds()

        const speechText = `${t("PASSED_TIME", start.toNow(true), addBreaks(remainingSeconds))} ${t("ENDING_SESSION")}`
        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
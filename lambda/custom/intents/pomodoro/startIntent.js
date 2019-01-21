import moment from 'moment'
import { IsIntentType } from '../helpers';
import { sessionDurationM, sessionDurationS, shortBreakS, shortBreakM } from './constants';
import { addPause } from './helper'

export const StartIntent = {
    canHandle(handler) {
        return IsIntentType(handler, 'StartINTENT')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        let attributes = handler.attributesManager.getSessionAttributes()

        // get the curent time, this will be considered the beginning time of timer
        attributes.startTime = moment().unix();

        if (!attributes.session) {
            attributes.session = 1
        } else {
            attributes.session++
        }

        const speechText = `${t("START", `${sessionDurationM} ${t("MINUTES")}`)} 
                            ${addPause(sessionDurationS)} 
                            ${t("ENDING_SESSION", `${shortBreakM} ${t("MINUTES")}`)} 
                            ${addPause(shortBreakS)} 
                            ${t("NEW_SESSION")}`;

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
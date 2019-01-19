
import moment from 'moment'
import { IsIntentType } from '../helpers';
import { sessionDurationM, sessionDurationS, states } from './constants';
import { addBreaks } from './helper'

export const StartIntent = {
    canHandle(handler) {
        return IsIntentType(handler, 'StartINTENT')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        let attributes = handler.attributesManager.getSessionAttributes()

        // get the curent time, this will be considered the beginning time of timer
        attributes.startTime = moment().unix();

        if (!attributes.state) {
            attributes.state = states.session1
        }

        const speechText = `${t("START", sessionDurationM + ' minutes', addBreaks(sessionDurationS))} ${t("ENDING_SESSION")}`;

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
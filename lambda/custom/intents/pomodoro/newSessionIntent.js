import moment from 'moment'
import { IsIntentType } from '../helpers';
import { sessionDurationM, sessionDurationS, shortBreakS, shortBreakM, longBreakM, longBreakS, states } from './constants';
import { addPause } from './helper'

export const NewSessionIntent = {
    canHandle(handler) {
        return IsIntentType(handler, 'NewSessionINTENT')
    },
    handle(handler) {
        const { t } = handler.attributesManager.getRequestAttributes();
        let attributes = handler.attributesManager.getSessionAttributes()
        let breakM = shortBreakM
        let breakS = shortBreakS

        // get the curent time, this will be considered the beginning time of timer
        attributes.startTime = moment().unix();

        if (attributes.state === states.DONE) {
            attributes.state = states.PROGRESS
            attributes.session = 1
        } else if (attributes.session == 3) {
            breakM = longBreakM
            breakS = longBreakS

            attributes.state = states.DONE
            attributes.session++
        } else {
            attributes.session++
        }

        const speechText = `${t("START", attributes.session, `${sessionDurationM} ${t("MINUTES")}`)} 
                            ${addPause(sessionDurationS)} 
                            ${t("ENDING_SESSION", `${breakM} ${t("MINUTES")}`)} 
                            ${addPause(breakS)} 
                            ${t("NEW_SESSION")}`;

        return handler.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
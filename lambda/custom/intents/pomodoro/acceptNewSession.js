import { IsIntentType } from '../helpers';
import { NewSessionIntent } from './newSessionIntent';

export const AcceptNewSession = {
    canHandle(handler) {
        return IsIntentType(handler, 'AMAZON.YesIntent')
    },
    handle(handler) {
        return NewSessionIntent.handle(handler)
    },
};
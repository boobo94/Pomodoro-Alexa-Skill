import { IsIntentType } from '../helpers';
import { NewSessionIntent } from './newSessionIntent';

export const AcceptNewSession = {
    canHandle(handler) {
        const { session } = handler.attributesManager.getSessionAttributes()

        return IsIntentType(handler, 'AMAZON.YesIntent') && (
            session >= 1 && session <= 4
        )
    },
    handle(handler) {
        return NewSessionIntent.handle(handler)
    },
};
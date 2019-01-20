import * as Alexa from "ask-sdk-core";
import * as Intents from './intents'
import * as Interceptors from './interceptors'
import * as Errors from './errors'

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        // Intents.Debug,

        // Built-In Intents
        Intents.Launch,
        Intents.Help,
        Intents.Stop,
        Intents.Cancel,
        Intents.Fallback,

        // Pomodoro
        Intents.StartIntent,
        Intents.PassedTimeIntent,
        Intents.RemainingTimeIntent,
    )
    .addErrorHandlers(
        Errors.Unknown,
    )
    .addRequestInterceptors(
        Interceptors.LocalizationInterceptor,
    ).addResponseInterceptors(
    ).lambda();

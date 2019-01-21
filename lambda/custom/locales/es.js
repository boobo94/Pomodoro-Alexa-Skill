export default {
    translation: {
        // general
        "WELCOME": "Bienvenido a Pomodoro",
        "UNKNOWN_ERROR": "Error desconocido",
        "HELP": "Mensaje de ayuda",
        "STOP": "Paraste cualquier actividad. Si desea iniciar una nueva sesión, diga 'Nuevo temporizador'.",
        "INCOMPREHENSIBLE": "Lo siento, pero no entiendo. ¿Puede usted repetir por favor?",
        "INCOMPREHENSIBLE_REPROMT": "Lo siento, no lo entiendo. ¿Se puede reformular?",
        "GOODBYE": "Adiós amigo, te escucho pronto!",
        "MINUTES": "minutos",

        "NEW_SESSION": "El descanso terminó. ¿Quieres iniciar una nueva sesión?",
        "REJECT_SESSION": "Si quieres una nueva sesión di: Nueva Sesión. Para cerrar la habilidad diga: Cancelar.",

        // start intent
        "START": "El temporizador comenzó. Tienes %s tiempo de trabajo.",
        "ENDING_SESSION": "Felicidades ... ahora puedes tomarte %s de descanso.",

        // passed intent
        "PASSED_TIME": "Pasaron %s.",

        // remaining intent
        "REMAINING_TIME": "Quedan %s.",
    },
    moment: {
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos pocos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d dias',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
    }
}

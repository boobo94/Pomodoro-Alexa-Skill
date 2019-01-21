/**
 * @addPause - Create a SSML string containing elements of type <break time="{number}s"/>
 * The reason of having this functions is that Amazon doesn't allow breaks bigger that 10s in SSML
 * @param {number} duration - number of seconds
 */
export const addPause = (duration) => {
    // first add the decimals if the number is not divisible with 10
    let response = `<break time="${duration % 10}s"/>`

    // add the rest of breaks necessary to achieve the desired time.
    for (let i = 0; i < duration / 10; i++)
        response += '<break time="10s"/>'

    return response
}
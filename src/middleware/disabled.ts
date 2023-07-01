import {IMiddleware} from "../types";

const disabledMiddleware: IMiddleware = async (sock, props, next) => {
    await sock.sendMessage(props.remoteJid, {
        text: `Sorry, the ${props.command} is not available for now.`
    })
}

export default disabledMiddleware

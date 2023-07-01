import {AnyMessageContent, delay, MiscMessageGenerationOptions} from "@whiskeysockets/baileys";
import {IProperties} from "../types";

/**
 * @param msg
 */
export const parseTextMessage = (msg) => {
    return msg.conversation ||
        msg.extendedTextMessage?.text ||
        msg.imageMessage?.caption ||
        msg.videoMessage?.caption
}

/**
 * @param COMMANDS
 * @param command
 */
export const findCommand = (COMMANDS, command: string) => COMMANDS[command]

/**
 * @param sock
 * @param jid
 * @param content
 * @param options
 */
export const sendMessageWithTyping = async (sock, jid: string, content: AnyMessageContent, options?: MiscMessageGenerationOptions) => {
    await sock.presenceSubscribe(jid)
    await delay(500)

    await sock.sendPresenceUpdate("composing", jid)
    await delay(2000)

    await sock.sendPresenceUpdate("paused", jid)

    await sock.sendMessage(jid, content, options)
}

/**
 * @param sock
 * @param props
 * @param content
 * @param options
 */
export const quoteReply = async (sock, props: IProperties, content: AnyMessageContent, options?: MiscMessageGenerationOptions) => {
    await sock.sendMessage(props.remoteJid, content, {quoted: props.msg, ...options})
}

/**
 * @param sock
 * @param props
 * @param content
 * @param options
 */
export const quoteReplyWithTyping = async (sock, props: IProperties, content: AnyMessageContent, options?: MiscMessageGenerationOptions) => {
    await sendMessageWithTyping(sock, props.remoteJid, content, {quoted: props.msg, ...options})
}

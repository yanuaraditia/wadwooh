import {proto, WASocket, WAMessage} from "@whiskeysockets/baileys";
import IMessage = proto.IMessage;
import IImageMessage = proto.Message.IImageMessage;
import IAudioMessage = proto.Message.IAudioMessage;
import IVideoMessage = proto.Message.IVideoMessage;
import IDocumentMessage = proto.Message.IDocumentMessage;
import IStickerMessage = proto.Message.IStickerMessage;

export interface IProperties {
    command: string,
    fromMe: boolean,
    isGroup: boolean,
    fromJid: string,
    remoteJid: string
    groupJid?: string | null,
    textMessage?: string | null
    message: any,
    msg: WAMessage,
    quotedMessage?: IMessage | null,
    imageMessage: IImageMessage | null,
    audioMessage: IAudioMessage | null,
    videoMessage: IVideoMessage | null,
    documentMessage: IDocumentMessage | null,
    stickerMessage: IStickerMessage | null,

    [key: string]: any
}

export interface ICommandOptions {
    title?: string,
    description?: string,
    hideFromHelp?: boolean,
    disabled?: boolean
}

export type IMiddleware = (sock: WASocket, properties: IProperties, next?: Middleware) => void

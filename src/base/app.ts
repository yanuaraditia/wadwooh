import {IMiddleware, ICommandOptions} from "../types";

interface TempCommand {
    command: string,
    properties: ICommandOptions,
    middlewares: IMiddleware[],
}

export class App {
    private commands: TempCommand[] = []
    module: string

    constructor(module: string) {
        this.module = module
    }

    set(command: string, properties: ICommandOptions, ...middlewares: IMiddleware[]) {
        this.commands.push({
            command,
            properties,
            middlewares
        })
    }

    getCommands() {
        return this.commands
    }
}

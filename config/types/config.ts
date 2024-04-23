interface IClient {
    host: string,
    port: number,
    protocol: string
}

interface IServer extends IClient {}

interface IConfig {
    client: IClient,
    server: IServer
}

export type {IConfig}
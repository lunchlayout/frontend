import { IError } from "../Error"

interface IDefaultState {
    isLoading: boolean,
    errors: IError[]
}

export type {IDefaultState}
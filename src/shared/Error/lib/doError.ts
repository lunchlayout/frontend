import { IError } from "../types/error";

function doError(error: IError | Error) {
    if (error instanceof Error) {
        return {
            message: error.message,
            errors: []
        }
    } else return error
}

export {doError}
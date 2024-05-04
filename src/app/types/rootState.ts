import { Store } from "..";

interface IRootState extends ReturnType<typeof Store.getState> {

}

export type {IRootState}
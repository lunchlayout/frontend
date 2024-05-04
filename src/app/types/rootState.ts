import { Store } from "..";

interface IRootState extends ReturnType<typeof Store.getState> {}

type AppDispatch = typeof Store.dispatch;

export type {IRootState, AppDispatch}
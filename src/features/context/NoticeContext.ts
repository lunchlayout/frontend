import { INoticeContext } from "@features/types/noticeContext";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<INoticeContext>(null);

export { Context, useContext };

import { HelmetProps } from "react-helmet";

export interface ISEOProps extends Pick<HelmetProps, "title"> {
	description?: string;
}

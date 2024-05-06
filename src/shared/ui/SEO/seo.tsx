import { Helmet } from "react-helmet";
import { ISEOProps } from "./seo.props";

export default function SEO({ title = "", description = "" }: ISEOProps) {
	return (
		<Helmet>
			<meta name="description" content={description} />
			<title>{title}</title>
		</Helmet>
	);
}

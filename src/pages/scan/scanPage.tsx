import { QRReader, SEO } from "@shared/ui";
import MobileEntryControl from "@widgets/MobileEntryControl";
import MobileEntryHeader from "@widgets/MobileEntryHeader";
import React from "react";

export default function ScanPage() {
	return (
		<>
			<main
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					minHeight: "100vh",
				}}
			>
				<MobileEntryHeader />
				<QRReader
					onSuccess={decodedText => console.log(decodedText)}
					onError={errorMessage => console.log(errorMessage)}
				/>
				<MobileEntryControl />
			</main>
			<SEO title={`QR код — Lunch Layout`} />
		</>
	);
}

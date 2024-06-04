interface ICafe {
	name: string;
	logo: string;
}

interface ICafeWithId extends ICafe {
	cafeId: string;
}

export type { ICafe, ICafeWithId };

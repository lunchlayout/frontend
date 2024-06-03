interface IGetCafeByIdReq {
	cafeId: string;
	query?: string;
	page?: number;
}

interface IGetCafesReq {
	query?: string;
	page?: number;
}

export type { IGetCafeByIdReq, IGetCafesReq };

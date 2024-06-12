type CacheType = Request["destination"];

interface ICacheSetting {
	name: string;
	resources: string[];
}

type ICacheConfig = Partial<Record<CacheType, ICacheSetting>>;

export type { ICacheConfig };

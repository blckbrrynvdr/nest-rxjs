export interface IRepositoriesRequest {
	search: string;
	hub: string;
}

export interface IGithubResponse {
	total_count: number,
	incomplete_results: boolean,
	items: any[],
}
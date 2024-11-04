import {Injectable} from '@nestjs/common';
import {ajax} from 'rxjs/ajax';
import {catchError, firstValueFrom, from, map, of, tap, toArray,} from "rxjs";
import {fromFetch} from "rxjs/internal/observable/dom/fetch";


@Injectable()
export class RxjsService {
	private readonly githubUrl = 'https://api.github.com/search/repositories?q=';

	private readonly gitlabUrl = 'https://gitlab.com/api/v4/projects?search=';

	private readonly githubName = 'github';

	private readonly gitlabName = 'gitlab';


	private getRepo(search: string, hub: string) {
		let query$: any;
		if (hub.toLowerCase() === this.githubName) {
			query$ = fromFetch(this.githubUrl + search, {
					selector: res => res.json()
				}
			).pipe(
				map((res: any) => res),
				toArray(),
			);
		}
		if (hub.toLowerCase() === this.gitlabName) {
			query$ = fromFetch(this.gitlabUrl + search, {
				selector: res => res.json()
			});
		}
		return query$.pipe(
			catchError(err => {
				console.error(err);
				return of(err);
			})
		);
	}

	getRepositories(name: string, hub: string): Promise<any> {
		return firstValueFrom(this.getRepo(name, hub));
	}
}

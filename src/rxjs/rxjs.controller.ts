import {Controller, Get, Query} from '@nestjs/common';
import {IRepositoriesRequest} from "./interfaces/rxjs.interface";
import {RxjsService} from "./rxjs.service";

@Controller('rxjs')
export class RxjsController {
	constructor(private rxjsService: RxjsService) {}


	@Get('github/')
	async getGithubRepositories(
		@Query() {search}: IRepositoriesRequest
	) {
		return await this.rxjsService.getRepositories(search, 'github')
	}

	@Get('gitlab/')
	async getGitlabRepositories(
		@Query() {search}: IRepositoriesRequest
	) {
		return await this.rxjsService.getRepositories(search, 'gitlab')
	}
}

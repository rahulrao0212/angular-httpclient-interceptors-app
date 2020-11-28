import { Component } from '@angular/core';
import { Filter } from './model/filter.model';
import { Repo } from './model/repo.model';
import { GitHubService } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient-interceptors-app';

  filter: Filter = {
    userName: 'tektutorialshub',
    pageNo: '1',
    sortOn: 'description'
  };

  repos: Repo[] | undefined;

  loading: boolean = false;
  errorMessage: string = '';

  constructor(private githubService: GitHubService) {
  }

  getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.filter)
      .subscribe((response) => { this.repos = response; },
        (error) => {
          this.errorMessage = error.message; this.loading = false;
        },
        () => { this.loading = false; })

  }
}

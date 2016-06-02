import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  data: any = null;

  constructor(public http: Http) {}
  
    getRepos(username) {
      let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
      return repos;
  }
}


import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearchUser } from '../git-search-user';


@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {
  searchUserResult: GitSearchUser;
  searchQuery: string;
  displayQuery: string;
  error: boolean;

  constructor(private GitSearchService: GitSearchService) { 
    this.error=false;
  }

  ngOnInit() {
   this.searchQuery = 'pedro'
   this.displayQuery = this.searchQuery;
   this.gitSearchUser();
  }


  gitSearchUser =()=>{
    this.GitSearchService.gitSearchUser(this.searchQuery).then((response)=>{
      console.log(response);
      this.searchUserResult = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
           this.error=true;
           this.displayQuery= 'Error';
    })
  }
}


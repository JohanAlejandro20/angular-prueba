import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  error: boolean;

  constructor(private GitSearchService: GitSearchService) { 
    this.error=false;
  }

  ngOnInit() {
   this.searchQuery = 'pedro'
   this.displayQuery = this.searchQuery;
   this.gitSearch();
  }

  gitSearch =()=>{
    this.GitSearchService.gitSearch(this.searchQuery).then((response)=>{
      this.searchResults = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      this.error=true;
      this.displayQuery= 'Error';

    })
  }

}

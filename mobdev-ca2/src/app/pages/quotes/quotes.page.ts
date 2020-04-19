import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../sevices/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

   quotes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.quotes = this.api.getQuotes();
      this.quotes.subscribe(data => {console.log('my data: ',data);
    });
  }

  openDetail(deaths){
      let quotes_author = name;
      this.router.navigateByUrl('/tabs/deaths/${death}');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.css']
})
export class ShowBalanceComponent implements OnInit {
  userBalance:number=0
  ngOnInit(): void {
    this.userBalance=history.state.data
  }

}

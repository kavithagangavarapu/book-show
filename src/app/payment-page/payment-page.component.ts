import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  checked = false;

  noOfSeats: any;

  ticketPrice = 229;

  priceWithoutTax: number = 0;

  priceWithTax: number = 0;

  serviceFee: number = 44.08;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.noOfSeats = this.activatedRoute.snapshot.queryParamMap.get("seat");
    this.priceWithoutTax = this.noOfSeats * this.ticketPrice;
    this.serviceFee = this.serviceFee * this.noOfSeats;
    this.priceWithTax = this.priceWithoutTax + this.serviceFee;
  }

  routeToDashboard() {
    this.router.navigateByUrl(``);
  }

  toggle(event: any) {
    console.log(event.source.value);
  }

}

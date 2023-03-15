import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-dialog',
  templateUrl: './seat-dialog.component.html',
  styleUrls: ['./seat-dialog.component.scss']
})
export class SeatDialogComponent {

  seatCount = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<SeatDialogComponent>,
    private router: Router
  ) { }


  confirmSeats() {
    this.dialogRef.close();
    this.router.navigate(['/payment'], {queryParams: {seat : this.seatCount.value}});
  }

}

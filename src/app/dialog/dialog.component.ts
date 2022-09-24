import { Component, OnInit } from '@angular/core';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public datapassService : DatapassService) { }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    // this.datapassService.confirmDeletion.unsubscribe()
  }

  confirmDeletion()
  {
    console.log("confirm delete");
    this.datapassService.confirmDeletion.next(true);
  }

  cancelDeletion()
  {
    console.log("not confirm delete");
    this.datapassService.confirmDeletion.next(false);
  }
}

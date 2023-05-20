import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-read-operation',
  templateUrl: './read-operation.component.html',
  styleUrls: ['./read-operation.component.css']
})
export class ReadOperationComponent implements OnInit
{
  
    message : any;

    constructor(private service : MarvellousService)
    {

    }
    ngOnInit(): void {
       
    }
    getBatchDetails()
    {
      this.service.readData().subscribe(data => {
        this.message = data;
      })
    }


}


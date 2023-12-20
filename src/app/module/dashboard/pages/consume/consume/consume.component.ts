import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/core/services/data/consume/consume.service';

@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css'],
})
export class ConsumeComponent implements OnInit {
  persons: any[] = [];

  constructor(private consumeService: ConsumeService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.consumeService.findAll().subscribe({
      next: (result) => {
        this.persons = result.data;
      },
      error: (error) => {
        console.log(error);
      },
    })

  }
}

import { Component } from '@angular/core';
import { Person } from 'src/app/core/models/person.model';
import { PersonService } from 'src/app/core/services/data/person/person.service';

@Component({
  selector: 'app-view-people',
  templateUrl: './view-people.component.html',
  styleUrls: ['./view-people.component.css']
})
export class ViewPeopleComponent {

  people: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.findAllProcesses();
  }

  async findAllProcesses() {
    this.personService.findAll().subscribe({
      next: (response) => {
        this.people = response.data;
      },
      error: (error) => {
        console.log("error consultando las personas");
      },
    })
  }

}

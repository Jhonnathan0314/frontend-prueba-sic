import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.itemOptions();
  }

  itemOptions() {
    this.items = [
      { label: 'Ver procesos', icon: 'pi pi-fw pi-search text-primary', command: () => { this.router.navigateByUrl('/dashboard/process/all') } },
      { label: 'Crear proceso', icon: 'pi pi-fw pi-plus text-primary', command: () => { this.router.navigateByUrl('/dashboard/process/create') } },
      { label: 'Ver personas', icon: 'pi pi-fw pi-pencil text-primary', command: () => { this.router.navigateByUrl('/dashboard/person/all') } },
      { label: 'Ver empleados', icon: 'pi pi-fw pi-pencil text-primary', command: () => { this.router.navigateByUrl('/dashboard/employee/all') } },
      { label: 'Ver personas punto 3', icon: 'pi pi-fw pi-pencil text-primary', command: () => { this.router.navigateByUrl('/dashboard/consume') } },
    ]
  }

}

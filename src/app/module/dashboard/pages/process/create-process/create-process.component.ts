import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessCreate } from 'src/app/core/models/process.model';
import { ProcessService } from 'src/app/core/services/data/process/process.service';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css'],
})
export class CreateProcessComponent implements OnInit {

  processForm: FormGroup;
  process: ProcessCreate = new ProcessCreate();

  constructor(
    private formBuilder: FormBuilder,
    private processService: ProcessService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.processForm = this.formBuilder.group({
      filingYear: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      processName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      filingPerson: ['', [Validators.required]],
      officialReceived: ['', [Validators.required]]
    });
  }

  receiveValue(key: string, value: string) {
    this.processForm.value[key] = value;
  }

  validateForm() {
    if(!this.processForm.valid) return;

    this.process = {
      filingYear: this.processForm.value.filingYear,
      processName: this.processForm.value.processName,
      description: this.processForm.value.description
    }
    
    this.create();
  }

  create() {
    const personId = this.processForm.value.filingPerson;
    const employeeId = this.processForm.value.officialReceived;
    this.processService.create(personId, employeeId, this.process).subscribe({
      next: (response) => {
        console.log("response", response);
        this.router.navigateByUrl('/dashboard/process/all');
      },
      error: (error) => {
        console.log("error", error);
      }
    });
  }
}

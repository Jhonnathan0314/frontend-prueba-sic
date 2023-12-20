import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Process, ProcessCreate } from 'src/app/core/models/process.model';
import { ProcessService } from 'src/app/core/services/data/process/process.service';

@Component({
  selector: 'app-update-process',
  templateUrl: './update-process.component.html',
  styleUrls: ['./update-process.component.css']
})
export class UpdateProcessComponent implements OnInit {

  id: number;

  process: Process = new Process();
  processUpdate: ProcessCreate = new Process();

  processForm: FormGroup;

  constructor(
    private processService: ProcessService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.findParamId();
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

  findParamId() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.id = Number(id.get('id'));
      this.findById();
    })
  }

  findById() {
    this.processService.findById(this.id).subscribe({
      next: (response) => {
        this.process = { ...response.data };
        this.putFormValues();
      },
      error: (error) => {
        console.log("error", error);
      }
    })
  }

  putFormValues() {
    this.processForm.patchValue({
      filingYear: this.process.filingYear,
      processName: this.process.processName,
      description: this.process.description,
      filingPerson: this.process.filingPerson.identificationNumber,
      officialReceived: this.process.officialReceived.identificationNumber
    })
  }

  receiveValue(key: string, value: string) {
    this.processForm.value[key] = value;
  }

  validateForm() {
    if(!this.processForm.valid) return;

    this.processUpdate = {
      filingYear: this.processForm.value.filingYear,
      processName: this.processForm.value.processName,
      description: this.processForm.value.description
    }
    
    this.update();
  }

  update() {
    const personId = this.processForm.value.filingPerson;
    const employeeId = this.processForm.value.officialReceived;
    
    this.processService.update(this.id, personId, employeeId, this.processUpdate).subscribe({
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

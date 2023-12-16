import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-steeper-form',
  templateUrl: './steeper-form.component.html',
  styleUrls: ['./steeper-form.component.scss']
})
export class SteeperFormComponent implements OnInit {
  techForm!:FormGroup;
  client_step = false;
  project_step = false;
  rfp_step = false;
  step = 1;
  businessOwners: any[]= [];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.techForm=this.fb.group({
      
      frontEnd:'',
      backEnd:'',
      testingFramework:'',
      hostingPlatform:''

    })
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.client_step = false;
    }
    if (this.step == 2) {
      this.rfp_step = false;
    }
  }

  next() {
    this.step++;
  }

  submit() { 
    const data = this.techForm.value

    console.log('data '+JSON.stringify(data))
  }
}

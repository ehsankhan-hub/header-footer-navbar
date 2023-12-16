import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteeperFormComponent } from './steeper-form.component';

describe('SteeperFormComponent', () => {
  let component: SteeperFormComponent;
  let fixture: ComponentFixture<SteeperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteeperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteeperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

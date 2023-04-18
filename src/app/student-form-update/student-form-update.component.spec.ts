import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormUpdateComponent } from './student-form-update.component';

describe('StudentFormUpdateComponent', () => {
  let component: StudentFormUpdateComponent;
  let fixture: ComponentFixture<StudentFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

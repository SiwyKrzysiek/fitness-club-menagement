import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeDialogComponent } from './edit-employee-dialog.component';

describe('EditEmployeeDialogComponent', () => {
  let component: EditEmployeeDialogComponent;
  let fixture: ComponentFixture<EditEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

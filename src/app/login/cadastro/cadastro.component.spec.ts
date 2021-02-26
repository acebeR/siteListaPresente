import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPresenteComponent } from './edit-presente.component';

describe('CadastroComponent', () => {
  let component: EditPresenteComponent;
  let fixture: ComponentFixture<EditPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPresenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

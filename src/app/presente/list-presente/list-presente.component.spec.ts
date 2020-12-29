import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresenteComponent } from './list-presente.component';

describe('ListPresenteComponent', () => {
  let component: ListPresenteComponent;
  let fixture: ComponentFixture<ListPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPresenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

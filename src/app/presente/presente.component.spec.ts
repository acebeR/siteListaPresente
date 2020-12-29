import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenteComponent } from './presente.component';

describe('PresenteComponent', () => {
  let component: PresenteComponent;
  let fixture: ComponentFixture<PresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

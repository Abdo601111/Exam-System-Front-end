import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractionsComponent } from './instractions.component';

describe('InstractionsComponent', () => {
  let component: InstractionsComponent;
  let fixture: ComponentFixture<InstractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

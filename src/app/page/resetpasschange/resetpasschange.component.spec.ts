import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasschangeComponent } from './resetpasschange.component';

describe('ResetpasschangeComponent', () => {
  let component: ResetpasschangeComponent;
  let fixture: ComponentFixture<ResetpasschangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasschangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

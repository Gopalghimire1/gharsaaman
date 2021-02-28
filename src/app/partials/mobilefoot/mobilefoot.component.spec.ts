import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilefootComponent } from './mobilefoot.component';

describe('MobilefootComponent', () => {
  let component: MobilefootComponent;
  let fixture: ComponentFixture<MobilefootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilefootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilefootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

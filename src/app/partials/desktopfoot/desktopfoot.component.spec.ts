import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopfootComponent } from './desktopfoot.component';

describe('DesktopfootComponent', () => {
  let component: DesktopfootComponent;
  let fixture: ComponentFixture<DesktopfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopfootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

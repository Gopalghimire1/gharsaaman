import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavitemComponent } from './favitem.component';

describe('FavitemComponent', () => {
  let component: FavitemComponent;
  let fixture: ComponentFixture<FavitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

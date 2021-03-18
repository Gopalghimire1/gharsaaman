import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomproductComponent } from './recomproduct.component';

describe('RecomproductComponent', () => {
  let component: RecomproductComponent;
  let fixture: ComponentFixture<RecomproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

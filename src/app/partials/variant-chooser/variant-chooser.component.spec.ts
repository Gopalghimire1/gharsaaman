import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantChooserComponent } from './variant-chooser.component';

describe('VariantChooserComponent', () => {
  let component: VariantChooserComponent;
  let fixture: ComponentFixture<VariantChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

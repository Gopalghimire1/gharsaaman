import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecategoryComponent } from './mobilecategory.component';

describe('MobilecategoryComponent', () => {
  let component: MobilecategoryComponent;
  let fixture: ComponentFixture<MobilecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

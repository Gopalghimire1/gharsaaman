import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OthenavComponent } from './othenav.component';

describe('OthenavComponent', () => {
  let component: OthenavComponent;
  let fixture: ComponentFixture<OthenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthenavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OthenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

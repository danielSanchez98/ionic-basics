import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceItemPage } from './place-item.page';

describe('PlaceItemPage', () => {
  let component: PlaceItemPage;
  let fixture: ComponentFixture<PlaceItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

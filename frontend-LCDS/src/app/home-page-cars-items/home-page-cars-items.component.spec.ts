import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCarsItemsComponent } from './home-page-cars-items.component';

describe('HomePageCarsItemsComponent', () => {
  let component: HomePageCarsItemsComponent;
  let fixture: ComponentFixture<HomePageCarsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageCarsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageCarsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

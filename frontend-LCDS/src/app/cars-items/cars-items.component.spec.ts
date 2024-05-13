import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsItemsComponent } from './cars-items.component';

describe('CarsItemsComponent', () => {
  let component: CarsItemsComponent;
  let fixture: ComponentFixture<CarsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

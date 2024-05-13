import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaikCarComponent } from './mosaik-car.component';

describe('MosaikCarComponent', () => {
  let component: MosaikCarComponent;
  let fixture: ComponentFixture<MosaikCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaikCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MosaikCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarItemsMozaikComponent } from './admin-car-items-mozaik.component';

describe('AdminCarItemsMozaikComponent', () => {
  let component: AdminCarItemsMozaikComponent;
  let fixture: ComponentFixture<AdminCarItemsMozaikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarItemsMozaikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCarItemsMozaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcartComponent } from './vcart.component';

describe('VcartComponent', () => {
  let component: VcartComponent;
  let fixture: ComponentFixture<VcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

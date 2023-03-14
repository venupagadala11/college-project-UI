import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeWaterComponent } from './safe-water.component';

describe('SafeWaterComponent', () => {
  let component: SafeWaterComponent;
  let fixture: ComponentFixture<SafeWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutedWaterComponent } from './polluted-water.component';

describe('PollutedWaterComponent', () => {
  let component: PollutedWaterComponent;
  let fixture: ComponentFixture<PollutedWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutedWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollutedWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

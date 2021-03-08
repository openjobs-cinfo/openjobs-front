import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEngineComponent } from './chart-engine.component';

describe('ChartEngineComponent', () => {
  let component: ChartEngineComponent;
  let fixture: ComponentFixture<ChartEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

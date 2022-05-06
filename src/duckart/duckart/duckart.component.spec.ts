import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckartComponent } from './duckart.component';

describe('DuckartComponent', () => {
  let component: DuckartComponent;
  let fixture: ComponentFixture<DuckartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

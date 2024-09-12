import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial1Component } from './parcial-1.component';

describe('Parcial1Component', () => {
  let component: Parcial1Component;
  let fixture: ComponentFixture<Parcial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

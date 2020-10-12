import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteValorInventarioComponent } from './reporte-valor-inventario.component';

describe('ReporteValorInventarioComponent', () => {
  let component: ReporteValorInventarioComponent;
  let fixture: ComponentFixture<ReporteValorInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteValorInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteValorInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

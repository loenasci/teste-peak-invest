import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularParcelasComponent } from './calcular-parcelas.component';

describe('CalcularParcelasComponent', () => {
  let component: CalcularParcelasComponent;
  let fixture: ComponentFixture<CalcularParcelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularParcelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

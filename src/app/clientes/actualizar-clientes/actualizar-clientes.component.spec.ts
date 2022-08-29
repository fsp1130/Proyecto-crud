import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarClientesComponent } from './actualizar-clientes.component';

describe('ActualizarClientesComponent', () => {
  let component: ActualizarClientesComponent;
  let fixture: ComponentFixture<ActualizarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

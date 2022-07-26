import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoVerificarComponent } from './exito-verificar.component';

describe('ExitoVerificarComponent', () => {
  let component: ExitoVerificarComponent;
  let fixture: ComponentFixture<ExitoVerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitoVerificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitoVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

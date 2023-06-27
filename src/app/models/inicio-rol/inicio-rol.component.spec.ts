import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRolComponent } from './inicio-rol.component';

describe('InicioRolComponent', () => {
  let component: InicioRolComponent;
  let fixture: ComponentFixture<InicioRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioRolComponent]
    });
    fixture = TestBed.createComponent(InicioRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

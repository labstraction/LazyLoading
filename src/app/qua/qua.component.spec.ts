import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaComponent } from './qua.component';

describe('QuaComponent', () => {
  let component: QuaComponent;
  let fixture: ComponentFixture<QuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

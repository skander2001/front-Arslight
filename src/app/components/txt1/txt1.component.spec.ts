import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Txt1Component } from './txt1.component';

describe('Txt1Component', () => {
  let component: Txt1Component;
  let fixture: ComponentFixture<Txt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Txt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Txt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

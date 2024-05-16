import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtiComponent } from './tti.component';

describe('TtiComponent', () => {
  let component: TtiComponent;
  let fixture: ComponentFixture<TtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

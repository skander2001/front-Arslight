import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationImagesComponent } from './association-images.component';

describe('AssociationImagesComponent', () => {
  let component: AssociationImagesComponent;
  let fixture: ComponentFixture<AssociationImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

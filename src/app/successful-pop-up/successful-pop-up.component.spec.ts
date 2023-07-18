import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPopUpComponent } from './successful-pop-up.component';

describe('SuccessfulPopUpComponent', () => {
  let component: SuccessfulPopUpComponent;
  let fixture: ComponentFixture<SuccessfulPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfulPopUpComponent]
    });
    fixture = TestBed.createComponent(SuccessfulPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulPopUpComponent } from './unsuccessful-pop-up.component';

describe('UnsuccessfulPopUpComponent', () => {
  let component: UnsuccessfulPopUpComponent;
  let fixture: ComponentFixture<UnsuccessfulPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsuccessfulPopUpComponent]
    });
    fixture = TestBed.createComponent(UnsuccessfulPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

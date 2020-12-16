import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryMiniComponent } from './enquiry-mini.component';

describe('EnquiryMiniComponent', () => {
  let component: EnquiryMiniComponent;
  let fixture: ComponentFixture<EnquiryMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

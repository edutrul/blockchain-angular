import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintcertificateComponent } from './printcertificate.component';

describe('PrintcertificateComponent', () => {
  let component: PrintcertificateComponent;
  let fixture: ComponentFixture<PrintcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

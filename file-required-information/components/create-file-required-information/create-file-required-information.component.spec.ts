import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileRequiredInformationComponent } from './create-file-required-information.component';

describe('CreateFileRequiredInformationComponent', () => {
  let component: CreateFileRequiredInformationComponent;
  let fixture: ComponentFixture<CreateFileRequiredInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFileRequiredInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFileRequiredInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMubashe } from './why-mubashe';

describe('WhyMubashe', () => {
  let component: WhyMubashe;
  let fixture: ComponentFixture<WhyMubashe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMubashe],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyMubashe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

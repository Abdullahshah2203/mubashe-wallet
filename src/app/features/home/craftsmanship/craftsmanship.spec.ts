import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Craftsmanship } from './craftsmanship';

describe('Craftsmanship', () => {
  let component: Craftsmanship;
  let fixture: ComponentFixture<Craftsmanship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Craftsmanship],
    }).compileComponents();

    fixture = TestBed.createComponent(Craftsmanship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

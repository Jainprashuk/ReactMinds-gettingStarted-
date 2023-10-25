import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyreactComponent } from './whyreact.component';

describe('WhyreactComponent', () => {
  let component: WhyreactComponent;
  let fixture: ComponentFixture<WhyreactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyreactComponent]
    });
    fixture = TestBed.createComponent(WhyreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

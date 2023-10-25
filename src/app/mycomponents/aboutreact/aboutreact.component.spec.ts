import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutreactComponent } from './aboutreact.component';

describe('AboutreactComponent', () => {
  let component: AboutreactComponent;
  let fixture: ComponentFixture<AboutreactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutreactComponent]
    });
    fixture = TestBed.createComponent(AboutreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

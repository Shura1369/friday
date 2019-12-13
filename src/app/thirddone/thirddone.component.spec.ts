import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirddoneComponent } from './thirddone.component';

describe('ThirddoneComponent', () => {
  let component: ThirddoneComponent;
  let fixture: ComponentFixture<ThirddoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirddoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirddoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

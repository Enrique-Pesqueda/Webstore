import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFinalizationComponent } from './order-finalization.component';

describe('OrderFinalizationComponent', () => {
  let component: OrderFinalizationComponent;
  let fixture: ComponentFixture<OrderFinalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFinalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

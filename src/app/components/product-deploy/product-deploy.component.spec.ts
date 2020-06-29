import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeployComponent } from './product-deploy.component';

describe('ProductDeployComponent', () => {
  let component: ProductDeployComponent;
  let fixture: ComponentFixture<ProductDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

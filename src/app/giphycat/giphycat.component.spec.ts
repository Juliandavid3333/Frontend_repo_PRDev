import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphycatComponent } from './giphycat.component';

describe('GiphycatComponent', () => {
  let component: GiphycatComponent;
  let fixture: ComponentFixture<GiphycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphycatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

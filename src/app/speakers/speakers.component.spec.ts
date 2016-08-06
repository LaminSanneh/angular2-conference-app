/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SpeakersComponent } from './speakers.component';

describe('Component: Speakers', () => {
  it('should create an instance', () => {
    let component = new SpeakersComponent();
    expect(component).toBeTruthy();
  });
});

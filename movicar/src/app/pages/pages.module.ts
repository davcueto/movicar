import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "./../shared.module";
import { SharedModuleC } from '../sharedcomponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    PagesComponent,
    OnboardingComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    SharedModuleC,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

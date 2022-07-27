import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PagesModule } from './pages.module';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      {
        path: 'onboarding',
        component: OnboardingComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

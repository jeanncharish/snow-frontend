import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { AppComponent }  from './app.component';
import { IncidentTable }  from './incident-table.component';
import { IncidentSummary }  from './incident-summary.component';
import { ACIPResolutions }  from './acip-resolutions.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'incident-table' },
  { path: 'incident-table', component: IncidentTable },
  { path: 'incident-summary', component: IncidentSummary },
  { path: 'acip-resolutions', component: ACIPResolutions }
];
 
 @NgModule({
	 imports: [
		RouterModule.forRoot(APP_ROUTES)
	 ],
	 exports: [
		RouterModule
	 ]
 })
export class AppRoutingModule {}

export const routingComponents = [
	AppComponent,
	IncidentTable, 
	IncidentSummary, 
	ACIPResolutions
];
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent }  from './app.component';
import { IncidentTable }  from './incident-table.component';
import { IncidentSummary }  from './incident-summary.component';
import { ACIPResolutions }  from './acip-resolutions.component';

@NgModule({
  imports:      [ 
	BrowserModule,
	AppRoutingModule
  ],
  declarations: [ 
	AppComponent,
	routingComponents,
	IncidentTable,
	IncidentSummary,
	ACIPResolutions
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

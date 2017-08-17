import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent }  from './app.component';
import { IncidentTable }  from './incident-table.component';
import { IncidentSummary }  from './incident-summary.component';
import { ACIPResolutions }  from './acip-resolutions.component';

import { SnowExtractService } from './snowextract.service';

@NgModule({
  imports:      [ 
	BrowserModule,
	HttpModule,
	AppRoutingModule,
	Ng2PaginationModule
  ],
  declarations: [ 
	AppComponent,
	routingComponents,
	IncidentTable,
	IncidentSummary,
	ACIPResolutions
  ],
  providers: [
	SnowExtractService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

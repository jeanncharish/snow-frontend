import { Component } from '@angular/core';

import { SnowExtractService } from './snowextract.service';

@Component({
  selector: 'acip-resolutions',
  template: `
	<div class="content-wrapper py-3">
    <div class="container-fluid">
		  <!-- Breadcrumbs -->
        <ol class="breadcrumb">
		      <li class="breadcrumb-item">
            <a routerLink="/incident-table" routerLinkActive="active">Incidents</a>
          </li>	
          <li class="breadcrumb-item">
            <a routerLink="/incident-summary" routerLinkActive="active">Incident Details</a>
          </li>
          <li class="breadcrumb-item active">ACIP Solutions</li>
        </ol>
		
		    <!-- ACIP Solutions -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table"></i>
            ACIP Solutions
          </div>
		       <div class="card-body" *ngFor="let ticket of tickets; let i = index">
              <table class="table table-bordered" width="100%" id="dataTable" cellspacing="0">
                <div class="card-body">
                  <h3 class="card-title">ACIP Solution #{{ticket.id}}</h3>
                  <h5>{{ticket.title}}</h5>
                  <p class="card-text">{{ticket.body}}</p>
                  <div class="form-group row">
                    <button type="button" class="btn btn-success btn-sm" style="margin-left:16px" routerLink="#">Use Resolution</button>
                    <label for="shortDescription" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-left:550px">Rating:</label>
                    <div class="col-sm-1">
                      <div id="dataTable_filter" class="dataTable_filter">
                        <select class="form-control form-control-sm">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left:-5px" routerLink="#">Submit Rating</button>
                  </div>
                </div>  
              </table>
           </div>
        </div>
		</div>
	  <!-- /.container-fluid -->
	</div>
	<!-- /.content-wrapper -->
	<router-outlet></router-outlet>
  `,
  providers: [SnowExtractService]
})

export class ACIPResolutions {
  
  tickets: any;

  constructor(private snowextractService:SnowExtractService) { 
    this.snowextractService.getTickets().subscribe( tickets=>{
      console.log(tickets);
	  this.tickets = tickets;
    });
}
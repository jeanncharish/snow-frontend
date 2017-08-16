import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IncidentSummary } from './incident-summary.component';

import { SnowExtractService } from './snowextract.service';

@Component({
  selector: 'incident-table',
  template: `
	<div class="content-wrapper py-3">
      <div class="container-fluid">
		<!-- Breadcrumbs -->
        <ol class="breadcrumb">
		  <li class="breadcrumb-item">
            <a routerLink="/incident-table" routerLinkActive="active">Incidents</a>
          </li>	
          <li class="breadcrumb-item active">Open Tickets</li>
        </ol>
        
		<!-- Example Tables Card -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table"></i>
            Open Tickets
          </div>
          <div class="card-body">
            <div class="table-responsive">
			  <!-- Choosing Configuration -->
			  <!--< div id="dataTable_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
				<div id="dataTable_filter" class="dataTable_filter">
				  <select class="form-control">
					Choose Configuration:<option>Default select</option>
				  </select>
				</div> -->
				<table class="table table-bordered" width="100%" id="dataTable" cellspacing="0">
				  <thead>
					<tr>
						<th>Incident</th>
						<th>Domain</th>
					  <th>Subject</th>
					  <th>Description</th>
					  </tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>
							<a routerLink="/incident-summary" routerLinkActive="active">INC12345</a>
						</td>
						<td>assignment_group</td>	
					  <td>Calls dropping</td>
					  <td>Why my calls dropped unexpectedly</td>
					</tr>
				  </tbody>
				</table>
			  <!-- </div> -->
			  <!-- /.dataTable_wrapper -->
            </div>
			<!-- /.table-responsive -->
          </div>
		  <!-- /.card-body -->
        </div>
		<!-- /.card mb-3 -->
	  </div>
	  <!-- /.container-fluid -->
	</div>
	<!-- /.content-wrapper -->
	<router-outlet></router-outlet>
  `,
  providers: [SnowExtractService]
})
export class IncidentTable {
	
  tickets: any;

  constructor(private snowextractService:SnowExtractService) { 
    this.snowextractService.getTickets().subscribe( tickets=>{
      console.log(tickets);
/*    this.tickets = tickets; */
    });
  }
/*
  tickets: any;
  activeticket: any;

  ngOnInit() {
    this.snowextractService.query().subscribe(
      exttickets => {
        this.tickets = exttickets;
      },
      error => console.log(error)
    );
    console.log(this.tickets)
  }
*/
}

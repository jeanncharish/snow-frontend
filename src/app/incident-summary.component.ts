import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ACIPResolutions }  from './acip-resolutions.component';

@Component({
  selector: 'incident-summary',
  template: `
	<div class="content-wrapper py-3">
      <div class="container-fluid">
		<!-- Breadcrumbs -->
        <ol class="breadcrumb">
		  <li class="breadcrumb-item">
            <a href="#">Incidents</a>
          </li>	
          <li class="breadcrumb-item active">Incident Details</li>
        </ol>
		
		<!-- Fields  Section -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-list-ul"></i>
            Incident
          </div>
		  <div class="card-body">
			<div class="container">
				<form>
					<div class="form-group row">
						<label for="incidentNumber" class="col-sm-1.5 col-form-label">Number</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" id="incidentNumber">
						</div>
						<label for="dateOpened" class="col-sm-1.5 col-form-label">Opened</label>
						<div class="col-sm-4">
							<input type="date" class="form-control" id="dateOpened">
						</div>
					</div>
					<div class="form-group row">
						<label for="incidentSubj" class="col-sm-1.5 col-form-label">Subject</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" id="incidentSubj">
						</div>
						<label for="dateClosed" class="col-sm-1.5 col-form-label">Closed</label>
						<div class="col-sm-4">
							<input type="date" class="form-control" id="dateClosed">
						</div>
					</div>
					<div class="form-group row">
						<label for="shortDescription" class="col-sm-1.5 col-form-label">Short Description</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="shortDescription">
						</div>
					<button type="button" class="btn btn-primary" routerLink="/acip-resolutions" routerLinkActive="active">ACIP Resolutions</button>
					</div>
					<div class="form-group row">
						<label for="resolution" class="col-sm-1.5 col-form-label">ACIP Resolution</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="resolution">
						</div>
					<button type="button" class="btn btn-primary" routerLink="#">Resolve</button>
					</div>
				</form>
			</div>
		  </div>
		</div>
	  </div>
	  <!-- /.container-fluid -->
	</div>
	<!-- /.content-wrapper -->
	<router-outlet></router-outlet>
  `
})

export class IncidentSummary { }
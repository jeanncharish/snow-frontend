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
            <a routerLink="/incident-table" routerLinkActive="active">Incidents</a>
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
						<label for="incidentNumber" class="col-sm-1.5 col-form-label col-form-label-sm">Number</label>
						<div class="col-sm-4" style="margin-right:111px">
							<input type="text" class="form-control form-control-sm" id="incidentNumber">
						</div>
						<label for="dateOpened" class="col-sm-1.5 col-form-label col-form-label-sm">Opened</label>
						<div class="col-sm-4">
							<input type="date" class="form-control form-control-sm" id="dateOpened">
						</div>
					</div>
					<div class="form-group row">
						<label for="incidentDomain" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-right:2px">Domain</label>
						<div class="col-sm-4" style="margin-right:111px">
							<input type="text" class="form-control form-control-sm" id="incidentDomain">
						</div>
						<label for="dateClosed" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-right:8px">Closed</label>
						<div class="col-sm-4">
							<input type="date" class="form-control form-control-sm" id="dateClosed">
						</div>
					</div>
					<div class="form-group row">
						<label for="incidentSubj" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-right:5px">Subject</label>
						<div class="col-sm-10">
							<input type="text" class="form-control form-control-sm" id="incidentSubj">
						</div>
					</div>
					<div class="form-group row">
						<label for="shortDescription" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-right:22px">Short Description</label>
						<div class="col-sm-9">
							<textarea class="form-control form-control-sm" id="shortDescription"></textarea>
						</div>
					<button type="button" class="btn btn-primary btn-sm" style="width:110px;height:35px;" routerLink="/acip-resolutions" routerLinkActive="active">ACIP Solutions</button>
					</div>
					<div class="form-group row">
						<label for="resolution" class="col-sm-1.5 col-form-label col-form-label-sm" style="margin-right:30px">ACIP Resolution</label>
						<div class="col-sm-9">
							<textarea class="form-control form-control-sm" id="resolution"></textarea>
						</div>
					</div>
					<br/>
					<button type="button" class="btn btn-success btn-sm" style="margin-left:-15px" routerLink="#">Resolve</button>
					<button type="button" class="btn btn-danger btn-sm" routerLink="/incident-table" routerLinkActive="active">Cancel</button>
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
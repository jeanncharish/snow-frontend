import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IncidentTable }  from './incident-table.component';

@Component({
  selector: 'my-app',
  template: `
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
	  <a class="navbar-brand" href="#">ACIP Ticketing Service</a>
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav">
          <li class="nav-item active" data-toggle="tooltip" data-placement="right" title="Incidents">
            <a class="nav-link" routerLink="/incident-table" routerLinkActive="active">
              <i class="fa fa-fw fa-files-o"></i>
              <span class="nav-link-text">
              Incidents</span>
            </a>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Configuration">
            <a class="nav-link" href="#">
              <i class="fa fa-fw fa-gear"></i>
              <span class="nav-link-text">
              Configuration</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
              <i class="fa fa-fw fa-sign-out"></i>
              Logout</a>
          </li>
        </ul>
      </div>
    </nav>
	
	<!-- Logout Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
	<router-outlet></router-outlet>
  `
})
export class AppComponent { }

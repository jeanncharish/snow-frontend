import { Component } from '@angular/core';

@Component({
  selector: 'acip-resolutions',
  template: `
	<div class="content-wrapper py-3">
      <div class="container-fluid">
		<!-- Breadcrumbs -->
        <ol class="breadcrumb">
		  <li class="breadcrumb-item">
            <a href="#">Incidents</a>
          </li>	
          <li class="breadcrumb-item active">ACIP Resolutions</li>
        </ol>
		
		<!-- Example Tables Card -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table"></i>
            ACIP Resolutions
          </div>
		  <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" width="100%" id="dataTable" cellspacing="0">
                
              </table>
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

export class ACIPResolutions { }
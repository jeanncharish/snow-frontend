"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var IncidentTable = (function () {
    function IncidentTable() {
    }
    return IncidentTable;
}());
IncidentTable = __decorate([
    core_1.Component({
        selector: 'incident-table',
        template: "\n\t<div class=\"content-wrapper py-3\">\n      <div class=\"container-fluid\">\n\t\t<!-- Breadcrumbs -->\n        <ol class=\"breadcrumb\">\n\t\t  <li class=\"breadcrumb-item\">\n            <a routerLink=\"/incident-table\" routerLinkActive=\"active\">Incidents</a>\n          </li>\t\n          <li class=\"breadcrumb-item active\">Open Tickets</li>\n        </ol>\n        \n\t\t<!-- Example Tables Card -->\n        <div class=\"card mb-3\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-table\"></i>\n            Open Tickets\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n\t\t\t  <!-- Choosing Configuration -->\n\t\t\t  <!--< div id=\"dataTable_wrapper\" class=\"dataTables_wrapper container-fluid dt-bootstrap4\">\n\t\t\t\t<div id=\"dataTable_filter\" class=\"dataTable_filter\">\n\t\t\t\t  <select class=\"form-control\">\n\t\t\t\t\tChoose Configuration:<option>Default select</option>\n\t\t\t\t  </select>\n\t\t\t\t</div> -->\n\t\t\t\t<table class=\"table table-bordered\" width=\"100%\" id=\"dataTable\" cellspacing=\"0\">\n\t\t\t\t  <thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <th>Incident</th>\n\t\t\t\t\t  <th>Subject</th>\n\t\t\t\t\t  <th>Description</th>\n\t\t\t\t\t  </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td>\n\t\t\t\t\t\t<a routerLink=\"/incident-summary\" routerLinkActive=\"active\">INC12345</a>\n\t\t\t\t\t  </td>\n\t\t\t\t\t  <td>Calls dropping</td>\n\t\t\t\t\t  <td>Why my calls dropped unexpectedly</td>\n\t\t\t\t\t</tr>\n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t  <!-- </div> -->s\n\t\t\t  <!-- /.dataTable_wrapper -->\n            </div>\n\t\t\t<!-- /.table-responsive -->\n          </div>\n\t\t  <!-- /.card-body -->\n        </div>\n\t\t<!-- /.card mb-3 -->\n\t  </div>\n\t  <!-- /.container-fluid -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<router-outlet></router-outlet>\n  "
    })
], IncidentTable);
exports.IncidentTable = IncidentTable;
//# sourceMappingURL=C:/Users/jeann.c.d.abihay/Documents/SnowProject/snow-frontend/src/app/incident-table.component.js.map
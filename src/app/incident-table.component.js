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
        template: "\n\t<div class=\"content-wrapper py-3\">\n      <div class=\"container-fluid\">\n\t\t<!-- Breadcrumbs -->\n        <ol class=\"breadcrumb\">\n\t\t  <li class=\"breadcrumb-item\">\n            <a href=\"#\">Incidents</a>\n          </li>\t\n          <li class=\"breadcrumb-item active\">Open Tickets</li>\n        </ol>\n        \n\t\t<!-- Example Tables Card -->\n        <div class=\"card mb-3\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-table\"></i>\n            Open Tickets\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" width=\"100%\" id=\"dataTable\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Incident</th>\n                    <th>Subject</th>\n                    <th>Description</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Incident</th>\n                    <th>Subject</th>\n                    <th>Description</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <tr>\n                    <td>\n\t\t\t\t\t\t<a routerLink=\"/incident-summary\" routerLinkActive=\"active\">INC12345</a>\n\t\t\t\t\t</td>\n                    <td>Calls dropping</td>\n                    <td>Why my calls dropped unexpectedly</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"card-footer small text-muted\">\n            Updated yesterday at 11:59 PM\n          </div>\n        </div>\n\t\t\n\t  </div>\n\t  <!-- /.container-fluid -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<router-outlet></router-outlet>\n  "
    })
], IncidentTable);
exports.IncidentTable = IncidentTable;
//# sourceMappingURL=C:/Users/jeann/Documents/Snow/snow-frontend/src/app/incident-table.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var IncidentSummary = (function () {
    function IncidentSummary() {
    }
    return IncidentSummary;
}());
IncidentSummary = __decorate([
    core_1.Component({
        selector: 'incident-summary',
        template: "\n\t<div class=\"content-wrapper py-3\">\n      <div class=\"container-fluid\">\n\t\t<!-- Breadcrumbs -->\n        <ol class=\"breadcrumb\">\n\t\t  <li class=\"breadcrumb-item\">\n            <a href=\"#\">Incidents</a>\n          </li>\t\n          <li class=\"breadcrumb-item active\">Open Ticket</li>\n        </ol>\n\t\t\n\t\t<!-- Fields  Section -->\n        <div class=\"card mb-3\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-list-ul\"></i>\n            Incident\n          </div>\n\t\t  <div class=\"card-body\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label for=\"incidentNumber\" class=\"col-sm-1.5 col-form-label\">Number</label>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"incidentNumber\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label for=\"dateOpened\" class=\"col-sm-1.5 col-form-label\">Opened</label>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"dateOpened\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label for=\"incidentSubj\" class=\"col-sm-1.5 col-form-label\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"incidentSubj\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label for=\"dateClosed\" class=\"col-sm-1.5 col-form-label\">Closed</label>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"dateClosed\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label for=\"shortDescription\" class=\"col-sm-1.5 col-form-label\">Short Description</label>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shortDescription\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/acip-resolutions\" routerLinkActive=\"active\">ACIP Resolutions</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label for=\"resolution\" class=\"col-sm-1.5 col-form-label\">ACIP Resolution</label>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"resolution\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" routerLink=\"#\">Resolve</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  <!-- /.container-fluid -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<router-outlet></router-outlet>\n  "
    })
], IncidentSummary);
exports.IncidentSummary = IncidentSummary;
//# sourceMappingURL=C:/Users/jeann/Documents/Snow/snow-frontend/src/app/incident-summary.component.js.map
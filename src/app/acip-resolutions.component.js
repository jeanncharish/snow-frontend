"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var snowextract_service_1 = require("./snowextract.service");
var ACIPResolutions = (function () {
    function ACIPResolutions(snowextractService) {
        var _this = this;
        this.snowextractService = snowextractService;
        this.snowextractService.getTickets().subscribe(function (tickets) {
            console.log(tickets);
            _this.tickets = tickets;
        });
    }
    return ACIPResolutions;
}());
ACIPResolutions = __decorate([
    core_1.Component({
        selector: 'acip-resolutions',
        template: "\n\t<div class=\"content-wrapper py-3\">\n    <div class=\"container-fluid\">\n\t\t  <!-- Breadcrumbs -->\n        <ol class=\"breadcrumb\">\n\t\t      <li class=\"breadcrumb-item\">\n            <a routerLink=\"/incident-table\" routerLinkActive=\"active\">Incidents</a>\n          </li>\t\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/incident-summary\" routerLinkActive=\"active\">Incident Details</a>\n          </li>\n          <li class=\"breadcrumb-item active\">ACIP Solutions</li>\n        </ol>\n\t\t\n\t\t<!-- ACIP Solutions -->\n        <div class=\"card mb-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<i class=\"fa fa-table\"></i>\n\t\t\t\tACIP Solutions\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<table class=\"table table-bordered\" width=\"100%\" id=\"dataTable\" cellspacing=\"0\">\n\t\t\t\t\t<div class=\"card-body\" *ngFor=\"let ticket of tickets | paginate: {itemsPerPage: 7, currentPage:page, id: '1'}; let i = index\">\n\t\t\t\t\t\t<h3 class=\"card-title\">ACIP Solution #{{ticket.id}}</h3>\n\t\t\t\t\t\t<h5>{{ticket.title}}</h5>\n\t\t\t\t\t\t<p class=\"card-text\">{{ticket.body}}</p>\n\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\" style=\"margin-left:16px\" routerLink=\"/incident-summary\" routerLinkActive=\"active\">Use Resolution</button>\n\t\t\t\t\t\t\t<label for=\"shortDescription\" class=\"col-sm-1.5 col-form-label col-form-label-sm\" style=\"margin-left:550px\">Rating:</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<div id=\"dataTable_filter\" class=\"dataTable_filter\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control form-control-sm\">\n\t\t\t\t\t\t\t\t\t\t<option>0</option>\n\t\t\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-left:-5px\" routerLink=\"#\">Submit Rating</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"absolute-right\">\n\t\t\t\t\t\t<pagination-controls (pageChange)=\"page = $event\" id=\"1\" maxSize=\"5\" directionLinks=\"true\" autoHide=\"true\"></pagination-controls>\n\t\t\t\t\t</div>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.container-fluid -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<router-outlet></router-outlet>\n  ",
        providers: [snowextract_service_1.SnowExtractService]
    }),
    __metadata("design:paramtypes", [snowextract_service_1.SnowExtractService])
], ACIPResolutions);
exports.ACIPResolutions = ACIPResolutions;
//# sourceMappingURL=C:/Users/jeann.c.d.abihay/Documents/SnowProject/snow-frontend/src/app/acip-resolutions.component.js.map
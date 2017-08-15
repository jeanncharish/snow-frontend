"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ACIPResolutions = (function () {
    function ACIPResolutions() {
    }
    return ACIPResolutions;
}());
ACIPResolutions = __decorate([
    core_1.Component({
        selector: 'acip-resolutions',
        template: "\n\t<div class=\"content-wrapper py-3\">\n    <div class=\"container-fluid\">\n\t\t  <!-- Breadcrumbs -->\n        <ol class=\"breadcrumb\">\n\t\t      <li class=\"breadcrumb-item\">\n            <a routerLink=\"/incident-table\" routerLinkActive=\"active\">Incidents</a>\n          </li>\t\n          <li class=\"breadcrumb-item active\">ACIP Solutions</li>\n        </ol>\n\t\t\n\t\t    <!-- ACIP Solutions -->\n        <div class=\"card mb-3\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-table\"></i>\n            ACIP Solutions\n          </div>\n\t\t       <div class=\"card-body\">\n              <table class=\"table table-bordered\" width=\"100%\" id=\"dataTable\" cellspacing=\"0\">\n                <div class=\"card-body\">\n                  <h3 class=\"card-title\">ACIP Solution #1</h3>\n                  <h5>Solution Description</h5>\n                  <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>\n                  <div class=\"form-group row\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\" style=\"margin-left:16px\" routerLink=\"#\">Use Resolution</button>\n                    <label for=\"shortDescription\" class=\"col-sm-1.5 col-form-label col-form-label-sm\" style=\"margin-left:600px\">Rating:</label>\n                    <div class=\"col-sm-1\">\n                      <div id=\"dataTable_filter\" class=\"dataTable_filter\">\n                        <select class=\"form-control form-control-sm\">\n                          <option>0</option>\n                          <option>1</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-left:-5px\" routerLink=\"#\">Submit</button>\n                  </div>\n                </div>  \n              </table>\n           </div>\n        </div>\n\t\t</div>\n\t  <!-- /.container-fluid -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<router-outlet></router-outlet>\n  "
    })
], ACIPResolutions);
exports.ACIPResolutions = ACIPResolutions;
//# sourceMappingURL=C:/Users/jeann.c.d.abihay/Documents/SnowProject/snow-frontend/src/app/acip-resolutions.component.js.map
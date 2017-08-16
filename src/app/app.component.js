"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n\t  <a class=\"navbar-brand\" href=\"#\">ACIP Ticketing Service</a>\n\t  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav navbar-sidenav\">\n          <li class=\"nav-item active\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Incidents\">\n            <a class=\"nav-link\" routerLink=\"/incident-table\" routerLinkActive=\"active\">\n              <i class=\"fa fa-fw fa-files-o\"></i>\n              <span class=\"nav-link-text\">\n              Incidents</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Configuration\">\n            <a class=\"nav-link\" href=\"#\">\n              <i class=\"fa fa-fw fa-gear\"></i>\n              <span class=\"nav-link-text\">\n              Configuration</span>\n            </a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n              <i class=\"fa fa-fw fa-sign-out\"></i>\n              Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\t\n\t<!-- Logout Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Select \"Logout\" below if you are ready to end your current session.\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\t<router-outlet></router-outlet>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=C:/Users/jeann.c.d.abihay/Documents/SnowProject/snow-frontend/src/app/app.component.js.map
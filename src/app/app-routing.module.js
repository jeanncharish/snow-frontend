"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var incident_table_component_1 = require("./incident-table.component");
var incident_summary_component_1 = require("./incident-summary.component");
var acip_resolutions_component_1 = require("./acip-resolutions.component");
var APP_ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'my-app' },
    { path: 'incident-table', component: incident_table_component_1.IncidentTable },
    { path: 'incident-summary', component: incident_summary_component_1.IncidentSummary },
    { path: 'acip-resolutions', component: acip_resolutions_component_1.ACIPResolutions }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(APP_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [app_component_1.AppComponent, incident_table_component_1.IncidentTable, incident_summary_component_1.IncidentSummary, acip_resolutions_component_1.ACIPResolutions];
//# sourceMappingURL=C:/Users/jeann.c.d.abihay/Documents/SnowProject/snow-frontend/src/app/app-routing.module.js.map
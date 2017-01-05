'use strict';
const app = angular.module( "OnlinePortal", [ 'RegisterService' ] );
let users = [];
app.controller( "UserRegistrationController", [ 'basicFunction', function ( basicFunction ) {
    let entities = this;
    this.factor = basicFunction.factor;
    this.regions = basicFunction.regions;
    this.citys = basicFunction.citys;
    this.states = basicFunction.states;
    entities.user = {};
    this.submit = () => {
        entities.user.factor = entities.factor( entities.user.age );
        users.push( entities.user );
        entities.user = null;
    };
    this.getUsers = () => {
        alert( JSON.stringify( users ) );
    };
} ] );

'use strict';
angular.module( 'RegisterService', [] )
    .factory( 'basicFunction', function () {
        let states = [ 'Bihar', 'Up', 'Karnataka', 'Maharastra' ],
            citys = [ 'Patna', 'Muzaffarpur', 'Bangalore', 'Pune', 'Banaras' ],
            regions = [ 'North', 'South', 'Middle East' ];
        let factor = function ( age ) {
            return age * 2.5;
        };

        return {
            regions: regions,
            states: states,
            citys: citys,
            factor: factor
        }
    } );

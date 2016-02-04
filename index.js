(function() {
    'use strict';
    angular.module('ngTimeSlider', [])
           .constant('$', window.$)
           .directive('ngTimeSlider', ngTimeSlider);

    ngTimeSlider.$inject = ['$'];

    function ngTimeSlider($) {
        return {
            restrict: 'A',
            scope: {
                startAt: '=startAt',
                cells: '=cells',
                cellPrefixLabel: '@'
            },
            link: function (scope, $element) {

                var elementId = '#' + $element.attr('id');
                $(elementId).TimeSlider({
                    current_timestamp: null,
                    hours_per_ruler: 26,
                    cell_draggable: false,
                    ruler_draggable: false,
                    start_timestamp: scope.startAt,
                    cell_prefix_label: scope.cellPrefixLabel,
                    init_cells: scope.cells
                });
            }
        };
    }
})();
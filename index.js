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
                startAt: '=',
                cells: '=',
                cellPrefixLabel: '@'
            },

            link: function (scope, $element, attrs) {

                var timeSliderId = '#' + attrs.id;

                scope.$watch('cells', function(cells) {
                    $(timeSliderId).TimeSlider('remove_all');
                    cells.forEach(function(cell) {
                        $(timeSliderId).TimeSlider('add', cell);
                    });
                }, true);

                $(timeSliderId).TimeSlider({
                    current_timestamp: null,
                    hours_per_ruler: 26,
                    cell_draggable: false,
                    ruler_draggable: false,
                    start_timestamp: scope.startAt,
                    cell_prefix_label: scope.cellPrefixLabel,
                    init_cells: null
                });
            }
        };
    }
})();
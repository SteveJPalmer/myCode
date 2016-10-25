
angular.module('app', [])
  .controller('ProductCtrl', function($rootScope) {
    var vm = this;
    /* directive test */
    vm.productName = 'ToyA';
    vm.productCost = 5.99;

    $rootScope.steveTest = 'testRootScope';   //need to inject $rootScope into ctrl
  })


  /* directive using parent scope - can just reference as vm(template) or scope.vm(link fn) */
  .directive('product', function() {
      return {
        template: 'Name: {{vm.productName}}  (localProp: {{localProp}}, OriginalName: {{productNameOriginal}},   )',

        link: function (scope, element, attr) {
          scope.localProp = 'steve';
          scope.productNameOriginal = scope.vm.productName;
          console.log(attr);
          console.log(attr.info);
        }
      };
  })

  /* directive using isolated scope - can pass in vm via scope (i've called it lscope) */
  .directive('product2', function() {
    return {
      template: 'Name: {{lscope.productName}}  (localProp: {{localProp}}, OriginalName: {{productNameOriginal}},   )',
      scope: {
        lscope: '=info'
      },
      link: function (scope, element, attr) {
        scope.localProp = 'steve';
        scope.productNameOriginal = scope.lscope.productName;
        // console.log(vm.productName);  //vm not defined as isolated scope (to also inherit from parent use: scope: true;)
        console.log(attr);
        console.log(attr.info);
      }
    };
  });

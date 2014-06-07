'use strict';

describe('Directive: iswhoweare', function () {

  // load the directive's module
  beforeEach(module('gdgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<iswhoweare></iswhoweare>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iswhoweare directive');
  }));
});

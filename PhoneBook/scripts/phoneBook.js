var myApp = angular.module('myApp', []);
myApp.controller('contactController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        var uId = 0;
        $scope.newContact = null;

        $http({
            method: 'GET',
            url:
                'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts',
        }).then(
            function successCallback(response) {
                $scope.contacts = response.data;
                uId = $scope.contacts[$scope.contacts.length - 1].id;
            },
            function errorCallback(response) {
                alert('Error fetching contacts!');
                uId = 1;
            }
        );

        // Save new contact
        $scope.saveContact = function () {
            if ($scope.newContact.id == null) {
                var alreadyExists = false;
                for (i in $scope.contacts) {
                    if (
                        angular.lowercase(
                            $scope.contacts[i].firstName.trim()
                        ) ==
                        angular.lowercase(
                            $scope.newContact.firstName.trim()
                        ) &&
                        angular.lowercase($scope.contacts[i].lastName.trim()) ==
                        angular.lowercase($scope.newContact.lastName.trim())
                    ) {
                        alert(
                            'A contact with same name already exists. Please edit the contact from phone book.'
                        );
                        alreadyExists = true;
                        break;
                    } else if (
                        $scope.contacts[i].phone.trim() ==
                        $scope.newContact.phone.trim()
                    ) {
                        alert(
                            'A contact with same phone number already exists. Please edit the contact from phone book.'
                        );
                        alreadyExists = true;
                        break;
                    }
                }
                if (alreadyExists) return;

                uId = uId + 1;
                $scope.newContact.id = uId;
                $scope.contacts.push($scope.newContact);
            } else {
                for (i in $scope.contacts) {
                    if ($scope.contacts[i].id == $scope.newContact.id) {
                        $scope.contacts[i] = $scope.newContact;
                    }
                }
            }
            $scope.newContact = { firstName: '', lastName: '', phone: '', id: '' };
            $scope.phoneBookForm.$setUntouched();
        };
        // Edit Contact
        $scope.edit = function (id) {
            for (var i in $scope.contacts) {
                if ($scope.contacts[i].id == id) {
                    $scope.newContact = angular.copy($scope.contacts[i]);
                }
            }
        };
        // Delete Contact
        $scope.delete = function (id) {
            for (var i in $scope.contacts) {
                if ($scope.contacts[i].id == id) {
                    $scope.contacts.splice(i, 1);
                    $scope.newContact = {};
                }
            }
        };
    },
]);

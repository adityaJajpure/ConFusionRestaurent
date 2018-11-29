'use strict';

angular.module('conApp',[]).controller('menuController',function(){
            
        $scope.tab = 1;
        $scope.filtext='' ;
        var dishes = [{
                          name : 'Zucchipakoda',
                          image : 'images/zucchipakoda.png',
                          category : 'mains',
                          label : 'HOT',
                          price : '10.11' ,
                          description : 'A unique dish created by adi'
                        },
                        {
                            name : 'Uthappizza',
                            image : 'images/uthapizza.png',
                            category : 'appetizer',
                            label : 'HOT',
                            price : '5.51',
                            description : 'A dish with combination of 2 dishes '
                        },
                        {
                            name : 'Vadonut',
                            image : 'images/vadonut.png',
                            category : 'appetizer',
                            label : 'HOT',
                            price : '11.11' ,
                            description : 'A unique dish created by adi specially for adiv04'
                        },
                        {
                            name : 'Buffet',
                            image : 'images/buffet.png',
                            category : 'mains',
                            label : 'HOT',
                            price : '50.51',
                            description : 'A dish with combination of 8 dishes '
                        },
                        {
                            name : 'Elaicheesecake',
                            image : 'images/elaicheesecake.png',
                            category : 'mains',
                            label : 'HOT',
                            price : '5.55',
                            description : 'A unique dish with no combinations :-0'
                            
                        }];
            $scope.dishes = dishes;
            $scope.select = function(setTab){
                $scope.tab = setTab; 
                if(setTab===2){
                     $scope.filText='appetizer';
                }
                else if(setTab===3){
                    $scope.filText='mains';
                }
                else {
                    $scope.filText="";
                }
            };
            $scope.isSelected = function(checkTab){
                return ($scope.tab === checkTab);
            };
         });
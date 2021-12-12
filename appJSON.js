// JavaScript source code
var app = angular.module('closetApp', ['dndLists']);

app.controller('ClosetController', function($scope) {
    $scope.closets = [
      {
          name: "Get fashionable! Add items to the main closet",
          items: []
      },
      {
          name: "Add items to Andrew's closet",
          items: []
      }
         
    ];
  
    $scope.items = [
      {
          id: 1,
          name: "Women's Shoes"
      },
      {
           id: 2,
           name: "Scarves"
       },
       {
            id: 3,
            name: "Kid's Shoes"
        },
        {
          id: 4,
          name: "Women's Pants"
        },
        {
            id: 5,
            name: "Purses"
        },
        {
            id: 6,
            name: "Kid's Jackets"
        },
        {
             id: 7,
             name: "Kid's Pants"
        },
         {
             id: 8,
             name: "Women's Shirts"
         },
        {
            id: 9,
            name: "Toys"
        },
         {
             id: 10,
             name: "Kid's Shirts"
         },
       
        
    ];
});
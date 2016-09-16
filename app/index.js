angular.module('chatMod',['ngRoute']).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{//登陆页面
        templateUrl:'/pages/login.html'
    }).when('/rooms',{//房间列表
        templateUrl:'/pages/rooms.html'
    }).when('/rooms/:id',{//某个房间内的聊天室
        templateUrl:'/pages/room.html'
    }).otherwise({
        redirectTo:'/'
    });
}

]);
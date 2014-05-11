'use strict';

var app = angular.module('gdgsiteApp', [
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blog'
            })
            .when('/blog/post/:id', {
                templateUrl: 'views/postView.html',
                controller: 'PostCtrl',
                constrollerAs: 'post'
            })
            .when('/who-we-are', {
                templateUrl: 'views/wwa.html',
                controller: 'who-we-are'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.controller("who-we-are", function ($scope) {
    $scope.contributorList = [
        {photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name: "Heber Lopez", gplus: "", fb: "", tw: ""},
        {photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name: "Gastón Guidollín", gplus: "", fb: "", tw: ""},
        {photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name: "Hernan Magrini", gplus: "", fb: "", tw: ""},
        {photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name: "Hernan Magrini", gplus: "", fb: "", tw: ""}
    ];

    var User = {
        _id: "algo",
        email: "asd@asd.asd",
        name: "Hola1",
        title: "asd",
        company: "asd",
        googlePlus: "asd",
        facebook: "asd",
        twitter: "asd",
        photo: "asd"
    };

    var Event = {
        _id: "",
        cover: "",
        title: "",
        dashedTitle: "",
        description: "",
        eventDate: "",
        difficulty: "",
        location: {
            x: "",
            y: ""
        },
        googlePlusAlbum: "",
        sessions: {
            title: "",
            description: "",
            tags: [
                {_id: "", name: ""}
            ],
            speakers: [ User ],

            startTime: "",
            endTime: "",

            githubLinks: [ "" ],
            videoLinks: [ "" ],
            demoLink: [ "" ],

            createdAt: "",
            modifiedAt: ""
        },
        createdAt: "",
        modifiedAt: ""
    };




});
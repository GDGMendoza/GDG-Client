'use strict';

var app = angular.module('gdgsiteApp', [
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/who-we-are',{
                templateUrl:'views/wwa.html',
                controller:'who-we-are'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.controller("who-we-are",function($scope){
    $scope.contributorList=[
        {
            photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name:"Heber Lopez",
            gplus:"https://plus.google.com/+HeberLópez",
            fb:"https://www.facebook.com/heberlopez",
            tw:"https://twitter.com/HeberLZ",
            location:"Santa Clara,EEUU",
            specialism:"Developer",
            company:"BattleGame"
        },
        {
            photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name:"Gastón Guidollín",
            gplus:"https://plus.google.com/+GastónGuidolín",
            fb:"https://www.facebook.com/tonganomataras",/* gastón no tiene nada público, pero la url es correcta */
            tw:"https://twitter.com/tonga298",
            location:"San Francisco,EEUU",
            specialism:"Developer",
            company:"BattleGame"
        },
        {
            photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFeElEQVR4Xu2Yx0udXRCHJ1iIvS5ERRdiwWxsCxv6x9srouLCEgsoKnItKJrYwhxQkk9RB+dLvM5zwUV8hzl3nt+T857jl0wmcy98IPBGAl8Q5o2kKEsEEAYRTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEUAYEy6KEQYHTAQQxoSLYoTBARMBhDHhohhhcMBEAGFMuChGGBwwEchqYa6urmRlZUUymYy0tbVJfX39k+GXlpbk4OBAmpubpbGxMT0/PDyU9fV1+fnzp5SVlcm3b98kPz//VXB/e71Xv9A/KMhaYTS8qampFPTFxcWzwpycnMj8/Lzc3d09CnN9fS2jo6NSVFQk1dXVsrW1JTU1NdLe3v4i/r+93j9w4U1LZq0wKsnx8bEUFxfL7OzsE2Hu7+9lenpaSkpKZG9v71GY/f19WV5elq6uLqmsrJTFxcXUZ3h4WL5//55+uru7paKiIj3T3au3t1dub2/d13tTQh+sKGuFeeCou8hzwuzu7srm5mYSY3x8/FEY/d3GxoYMDAxIQUGBrK6uys7OThImJycnSaaflpaWtDv991XnuV5eXt4H0+H1r/Mphbm5uZGxsTFpbW1NO8XIyMijMHp20dfQ4OCgfP36NZ1lfv/36empzMzMSG5ubtq9enp6/qD4nDDvWe/1iD5WxacURncNDVZ3lx8/fsjExIQ0NTVJQ0ND2k10h+nv75fCwsI/dpiH//G6y5ydnaVzTW1t7avCvHe9j6XEy9/mUwozOTkp5+fnTyZXYfRWpDenjo6OdOhdWFhIcgwNDaV6vVHpcz0U67lFzy+627z0CnzPetkki37XrBVGr8R6WL28vEyvlbq6unSILS8vT7uKhq0fvRXp4VWf67Vab1X6inq4JemZRp/pWUVfLboblZaWpleYiqDP9NX2f6yXbbJktTAqy9zc3BPmnZ2dUlVV9fh7lef3M4w+ODo6krW1NdGrskqmf4fRXUT/pqO3qL6+vnQg1prt7e10jtFbl/d6CJONBPjOJgJZ+0oyTUmxGwGEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbUqEcUMZoxHCxMjZbcpfR1gotUh4JykAAAAASUVORK5CYII=",
            name:"Hernan Magrini",
            gplus:"https://plus.google.com/117054261306853104149",
            fb:"https://www.facebook.com/Her.Magrini",
            tw:"https://twitter.com/HerMagrini",
            location:"Mendoza,ARG",
            specialism:"Developer",
            company:"BattleGame"
        }];

    /*https://plus.google.com/+LeonardoPatiñoCorvellio https://www.facebook.com/leonardo.patino.520 https://twitter.com/corvellio */
    $scope.descriptionTitle = "Descripción";
    $scope.descriptionTextualContent =
        "Google Developers Group Mendoza provee una red para la gente interesada"+
        "en el desarrollo, aprendizaje e implementación de tecnologías Google."+
        "Somos inclusivos, No exclusivos. Nuestros miembros varían entre"+
        "programadores, estudiantes, presentadores, gente avocada al negocio,"+
        "diseñadores, webmasters con distintos skills y experiencias. Tratamos de"+
        "generar un ambiente positivo y entretenido de aprendizaje, comunidad y"+
        "desarrollo.";
    $scope.misionTitle = "Misión";
    $scope.misionTextualContent =
        "Acercar a la comunidad herramientas de código libre desarrolladas por"+
        "Google.";
    $scope.legalAdvertisementTitle = "Aviso Legal"+":";
    $scope.legalAdvertisementTextualContent =
        "GDG Mendoza es un grupo independiente; nuestras"+
        "actividades y opiniones expresadas en esta +Page no deben ser en ningún"+
        "caso relacionadas con Google, la corporación.";
});

app.directive('city',function ($parse,$log) {
    return{
//        transclude: true,
        scope: {
            localCity: "@city"
        },
        replace: true,
        link:function(scope, iElement, iAttrs) {
                var name = scope.localCity;
                console.log(name);
//                var getter = $parse(name);
                var arrayAux = name.split(",");
                var citySelected = arrayAux[0];
                var countrySelected = arrayAux[1];
                if(countrySelected == "ARG"){
                    var cityList = {
                        "Buenos Aires":"Buenos+Aires,BA",
                        "Catamarce":"Catamarca,CT",
                        "Chaco":"Chaco,CC",
                        "Chubut":"Chubut,CH",
                        "Córdoba":"Córdoba,CD",
                        "Corrientes":"Corrientes,CR",
                        "Entre Ríos":"Entre+Ríos,ER",
                        "Formosa":"Formosa,FO",
                        "Jujuy":"Jujuy,JY",
                        "La Pampa":"La+Pampa,LP",
                        "La Rioja":"La+Rioja,LR",
                        "Mendoza":"Mendoza,MZ",
                        "Misiones":"Misiones,MN",
                        "Neuquén":"Neuquén,NQ",
                        "Río Negro":"Río+Negro,RN",
                        "Salta":"Salta,SA",
                        "San Juan":"San+Juan,SJ",
                        "San Luis":"San+Luis,SL",
                        "Santa Cruz":"Santa+Cruz,SC",
                        "Santa Fe":"Santa+Fe,SF",
                        "Santiago del Estero":"Santiago+del+Estero,SE",
                        "Tierra del Fuego":"Tierra+del+Fuego,+Antártida+e+Islas+del+Atlántico+Sur,TF",
                        "Tucumán":"Tucumán,TM"
                    }
                }
                if(countrySelected == "EEUU"){
                    var cityList = {
                        "San Francisco":"San+Francisco,CA",
                        "Santa Clara":"Santa+Clara,CA"
                    }
                }
                var urlBase = 'http://maps.googleapis.com/maps/api/staticmap?';
                var mapZoom = '&zoom=14';
                var mapType = '&maptype=roadmap\\';
                var mapSize = '&size='+iAttrs.width+'x'+iAttrs.height;
                var location = 'center='+cityList[citySelected];
                var markers = '&markers=size:mid%7Ccolor:green%7C'+cityList[citySelected];
                var sensorBool = '&sensor=false';
                var url = urlBase+location+mapZoom+mapSize+mapType+markers+sensorBool;
                var hrefToCity =
                    'https://maps.google.com.ar/maps?q='+cityList[citySelected]+
                    '&hnear='+cityList[citySelected]+'&center='+
                    cityList[citySelected]+'&zoom=14&maptype=roadmap';
                scope.url = urlBase+location+mapZoom+mapSize+mapType+markers+sensorBool;
                scope.hrefToCity =
                    'https://maps.google.com.ar/maps?q='+cityList[citySelected]+
                    '&hnear='+cityList[citySelected]+'&center='+
                    cityList[citySelected]+'&zoom=14&maptype=roadmap';
                scope.htmlText =
                    '<a class="" href="'+hrefToCity+'">'+
                    '<img class="media-object wwa-contributor-image-location"'+
                    ' ng-src="'+url+'" alt="Location of {{contributor.name }}" />'+
                    '</a>';
        },
        template:
                '<a class="" href=" {{hrefToCity}}" target="_blank">'+
                '<img class="media-object wwa-contributor-image-location"'+
                ' ng-src="{{url}}" alt="Location of {{contributor.name }}" />'+
                '</a>'
    };
});

/*
* http://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\
 &markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&sensor=false
 http://maps.googleapis.com/maps/api/staticmap?center=Mendoza,MZA&size=512x512&sensor=false
 http://maps.googleapis.com/maps/api/staticmap?center=Mendoza,MZA&size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:green%7CMendoza,MZA&sensor=false
 http://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&sensor=false
* */
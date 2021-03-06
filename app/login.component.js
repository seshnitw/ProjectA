System.register(['angular2/core', 'angular2/router', 'angular2/common', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, user_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.invalidCredentials = false;
                    this.form = new common_1.ControlGroup({
                        username: new common_1.Control('', common_1.Validators.required),
                        password: new common_1.Control('', common_1.Validators.required)
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.invalidCredentials = false;
                    if (this.userService.isLoggedIn()) {
                        this.router.navigate(['Home']);
                    }
                };
                LoginComponent.prototype.signIn = function () {
                    this.invalidCredentials = false;
                    var email = this.form.value.username;
                    var password = this.form.value.password;
                    var result = this.userService.login(email, password);
                    if (result) {
                        this.router.navigate(['Home']);
                    }
                    else {
                        this.invalidCredentials = true;
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map
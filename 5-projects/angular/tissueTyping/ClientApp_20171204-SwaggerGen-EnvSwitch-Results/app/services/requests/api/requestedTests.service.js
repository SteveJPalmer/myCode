"use strict";
/**
 * Requests API 1.0
 * CliniSys Requests API.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("../rxjs-operators");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var RequestedTestsService = /** @class */ (function () {
    function RequestedTestsService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8688';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RequestedTestsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @param labNumber
     * @param tests
     */
    RequestedTestsService.prototype.apiRequestsByLabNumberRequestedTestsByTestsDelete = function (labNumber, tests, extraHttpRequestParams) {
        return this.apiRequestsByLabNumberRequestedTestsByTestsDeleteWithHttpInfo(labNumber, tests, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param labNumber
     * @param requestedTests
     */
    RequestedTestsService.prototype.apiRequestsByLabNumberRequestedTestsPost = function (labNumber, requestedTests, extraHttpRequestParams) {
        return this.apiRequestsByLabNumberRequestedTestsPostWithHttpInfo(labNumber, requestedTests, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     *
     * @param labNumber
     * @param tests
     */
    RequestedTestsService.prototype.apiRequestsByLabNumberRequestedTestsByTestsDeleteWithHttpInfo = function (labNumber, tests, extraHttpRequestParams) {
        if (labNumber === null || labNumber === undefined) {
            throw new Error('Required parameter labNumber was null or undefined when calling apiRequestsByLabNumberRequestedTestsByTestsDelete.');
        }
        if (tests === null || tests === undefined) {
            throw new Error('Required parameter tests was null or undefined when calling apiRequestsByLabNumberRequestedTestsByTestsDelete.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/api/Requests/" + encodeURIComponent(String(labNumber)) + "/RequestedTests/" + encodeURIComponent(String(tests)), requestOptions);
    };
    /**
     *
     *
     * @param labNumber
     * @param requestedTests
     */
    RequestedTestsService.prototype.apiRequestsByLabNumberRequestedTestsPostWithHttpInfo = function (labNumber, requestedTests, extraHttpRequestParams) {
        if (labNumber === null || labNumber === undefined) {
            throw new Error('Required parameter labNumber was null or undefined when calling apiRequestsByLabNumberRequestedTestsPost.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: requestedTests == null ? '' : JSON.stringify(requestedTests),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/api/Requests/" + encodeURIComponent(String(labNumber)) + "/RequestedTests", requestOptions);
    };
    RequestedTestsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
    ], RequestedTestsService);
    return RequestedTestsService;
}());
exports.RequestedTestsService = RequestedTestsService;

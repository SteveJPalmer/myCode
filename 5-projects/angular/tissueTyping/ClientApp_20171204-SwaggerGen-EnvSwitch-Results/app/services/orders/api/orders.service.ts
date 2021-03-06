/**
 * Orders API 1.0
 * CliniSys Orders API.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { CreateOrderDto } from '../model/createOrderDto';
import { OrderDto } from '../model/orderDto';
import { UpdateOrderDto } from '../model/updateOrderDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class OrdersService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new Headers();
    public configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * @param orderNumber 
     */
    public apiOrdersByOrderNumberGet(orderNumber: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<OrderDto> {
        return this.apiOrdersByOrderNumberGetWithHttpInfo(orderNumber, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param orderNumber 
     * @param order 
     */
    public apiOrdersByOrderNumberPut(orderNumber: string, order?: UpdateOrderDto, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.apiOrdersByOrderNumberPutWithHttpInfo(orderNumber, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param orderNumber 
     */
    public apiOrdersGet(orderNumber?: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Array<OrderDto>> {
        return this.apiOrdersGetWithHttpInfo(orderNumber, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param order 
     */
    public apiOrdersPost(order?: CreateOrderDto, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.apiOrdersPostWithHttpInfo(order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * 
     * 
     * @param orderNumber 
     */
    public apiOrdersByOrderNumberGetWithHttpInfo(orderNumber: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (orderNumber === null || orderNumber === undefined) {
            throw new Error('Required parameter orderNumber was null or undefined when calling apiOrdersByOrderNumberGet.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/Orders/${encodeURIComponent(String(orderNumber))}`, requestOptions);
    }

    /**
     * 
     * 
     * @param orderNumber 
     * @param order 
     */
    public apiOrdersByOrderNumberPutWithHttpInfo(orderNumber: string, order?: UpdateOrderDto, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (orderNumber === null || orderNumber === undefined) {
            throw new Error('Required parameter orderNumber was null or undefined when calling apiOrdersByOrderNumberPut.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: order == null ? '' : JSON.stringify(order), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/Orders/${encodeURIComponent(String(orderNumber))}`, requestOptions);
    }

    /**
     * 
     * 
     * @param orderNumber 
     */
    public apiOrdersGetWithHttpInfo(orderNumber?: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        if (orderNumber !== undefined) {
            queryParameters.set('orderNumber', <any>orderNumber);
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/Orders`, requestOptions);
    }

    /**
     * 
     * 
     * @param order 
     */
    public apiOrdersPostWithHttpInfo(order?: CreateOrderDto, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: order == null ? '' : JSON.stringify(order), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/Orders`, requestOptions);
    }

}

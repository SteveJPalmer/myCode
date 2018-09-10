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

import { OrderableDto } from '../model/orderableDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class OrderablesService {

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
     * @param orderables 
     */
    public apiOrdersByOrderNumberOrderablesPost(orderNumber: string, orderables?: Array<OrderableDto>, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.apiOrdersByOrderNumberOrderablesPostWithHttpInfo(orderNumber, orderables, extraHttpRequestParams)
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
     * @param orderables 
     */
    public apiOrdersByOrderNumberOrderablesPostWithHttpInfo(orderNumber: string, orderables?: Array<OrderableDto>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (orderNumber === null || orderNumber === undefined) {
            throw new Error('Required parameter orderNumber was null or undefined when calling apiOrdersByOrderNumberOrderablesPost.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: orderables == null ? '' : JSON.stringify(orderables), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/Orders/${encodeURIComponent(String(orderNumber))}/Orderables`, requestOptions);
    }

}

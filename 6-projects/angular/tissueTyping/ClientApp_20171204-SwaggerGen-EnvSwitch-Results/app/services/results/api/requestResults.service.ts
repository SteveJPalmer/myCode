/**
 * Tissue Typing API 1.0
 * CliniSys Tissue Typing API.
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

import { HLAObservationDto } from '../model/hLAObservationDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class RequestResultsService {

    protected basePath = 'http://localhost:8833';
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
     * @param labNumber 
     */
    public apiTissueTypingRequestsByLabNumberResultsGet(labNumber: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Array<HLAObservationDto>> {
        return this.apiTissueTypingRequestsByLabNumberResultsGetWithHttpInfo(labNumber, extraHttpRequestParams)
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
     * @param labNumber 
     * @param observations 
     */
    public apiTissueTypingRequestsByLabNumberResultsPut(labNumber: string, observations?: Array<HLAObservationDto>, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.apiTissueTypingRequestsByLabNumberResultsPutWithHttpInfo(labNumber, observations, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204 || response.status === 200) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * 
     * 
     * @param labNumber 
     */
    public apiTissueTypingRequestsByLabNumberResultsGetWithHttpInfo(labNumber: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (labNumber === null || labNumber === undefined) {
            throw new Error('Required parameter labNumber was null or undefined when calling apiTissueTypingRequestsByLabNumberResultsGet.');
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

        return this.http.request(`${this.basePath}/api/TissueTyping/Requests/${encodeURIComponent(String(labNumber))}/Results`, requestOptions);
    }

    /**
     * 
     * 
     * @param labNumber 
     * @param observations 
     */
    public apiTissueTypingRequestsByLabNumberResultsPutWithHttpInfo(labNumber: string, observations?: Array<HLAObservationDto>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (labNumber === null || labNumber === undefined) {
            throw new Error('Required parameter labNumber was null or undefined when calling apiTissueTypingRequestsByLabNumberResultsPut.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: observations == null ? '' : JSON.stringify(observations), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/api/TissueTyping/Requests/${encodeURIComponent(String(labNumber))}/Results`, requestOptions);
    }

}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hla_results_entry_helper_service_1 = require("./hla-results-entry.helper.service");
describe('hla-results-entry helper service - test env', function () {
    it('true is true', function () { return expect(true).toBe(true); });
});
describe('hla-results-entry helper service', function () {
    var service;
    var mockResults = [
        {
            "test": "PER",
            "results": [
                {
                    "hlaType": "HLA-A",
                    "value1": "A1",
                    "value2": "A2"
                },
                {
                    "hlaType": "HLA-B",
                    "value1": "B1",
                    "value2": "B2"
                }
            ]
        },
        {
            "test": "CDC",
            "results": [
                {
                    "hlaType": "HLA-A",
                    "value1": "C1",
                    "value2": "C2"
                },
                {
                    "hlaType": "HLA-B",
                    "value1": "C11",
                    "value2": "C12"
                }
            ]
        }
    ];
    var mockTypes = [];
    mockTypes.push('HLA-Bw', 'HLA-B', 'HLA-A');
    beforeEach(function () { service = new hla_results_entry_helper_service_1.HlaResultsEntryHelperService(); });
    it('#getHLATypes should return array of HLA types', function () {
        expect(service.getHLATypes()).not.toEqual([]);
        expect(service.getHLATypes()).toMatch(/HLA-A/);
    });
    it('#extractResult should return matching tests data', function () {
        expect(service.extractResult(mockResults, 'CDC')).not.toEqual([]);
        expect(service.extractResult(mockResults, 'CDC'))
            .toEqual([
            {
                "hlaType": "HLA-A",
                "value1": "C1",
                "value2": "C2"
            },
            {
                "hlaType": "HLA-B",
                "value1": "C11",
                "value2": "C12"
            }
        ]);
    });
    it('#mapToHlaType should return test results matching types array', function () {
        var mockCDCResults = service.extractResult(mockResults, 'CDC');
        expect(service.mapToHlaType(mockCDCResults, mockTypes)).not.toEqual([]);
        expect(service.mapToHlaType(mockCDCResults, mockTypes))
            .toEqual([
            {
                "hlaType": "HLA-Bw",
                "value1": "",
                "value2": ""
            },
            {
                "hlaType": "HLA-B",
                "value1": "C11",
                "value2": "C12"
            },
            {
                "hlaType": "HLA-A",
                "value1": "C1",
                "value2": "C2"
            }
        ]);
    });
    it('#resultsGrid should return results matching types array for given test', function () {
        expect(service.resultsGrid('PER', mockResults, mockTypes)).not.toEqual([]);
        expect(service.resultsGrid('PER', mockResults, mockTypes))
            .toEqual([
            {
                "hlaType": "HLA-Bw",
                "value1": "",
                "value2": ""
            },
            {
                "hlaType": "HLA-B",
                "value1": "B1",
                "value2": "B2"
            },
            {
                "hlaType": "HLA-A",
                "value1": "A1",
                "value2": "A2"
            }
        ]);
    });
});

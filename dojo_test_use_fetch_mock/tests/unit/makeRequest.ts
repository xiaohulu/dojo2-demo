const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

import 'isomorphic-fetch';
import * as fetchMock from 'fetch-mock';

import { makeRequest } from '../../src/makeRequest';

registerSuite('mock fetch', {

    tests: {
        'mock fetch test'(){
            fetchMock.get('*', {hello: 'world'});
            makeRequest().then(function(data){
                assert.equal(data.hello, 'world');
            });
        }
    }

});
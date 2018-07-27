/*!
 * @dispatchlabs/disnode-sdk <https://github.com/dispatchlabs/disnode_sdk>
 *
 * Copyright © 2018, [Dispatch Labs](http://dispatchlabs.io).
 * Released under the LGPL v3 License.
 */

'use strict'

module.exports = (DisNodeSDK) => {
  const stubData = {
    Account: {
      empty: {
        name: undefined,
        address: undefined,
        privateKey: undefined,
        publicKey: undefined,
        balance: undefined,
        created: undefined,
        updated: undefined
      },
      A1: {
        name: undefined,
        address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        privateKey: '472ba91402425b58a2eebf932812f20c6d7f6297bba1f83d9a58116ae6512d9e',
        publicKey: '04775936b80a436491a386fbdbea04603b12689e3e2600085ecf956dc4dd1bed45240eb7fcabfebc98f24d28c5862d3e8a9d9a4b26265f35b727b98db24d9f0566',
        balance: 5,
        created: undefined,
        updated: undefined
      },
      A1_str: '{"address":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d","privateKey":"472ba91402425b58a2eebf932812f20c6d7f6297bba1f83d9a58116ae6512d9e","publicKey":"04775936b80a436491a386fbdbea04603b12689e3e2600085ecf956dc4dd1bed45240eb7fcabfebc98f24d28c5862d3e8a9d9a4b26265f35b727b98db24d9f0566","balance":5}',
      A2: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b'
    },
    Transaction: {
      T1: {
        hash: '1d6aca3a91c9ad81f36d0e52e47992257ba4c5309916ca370a2a37e9abad2e1f',
        type: 0,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        value: 5,
        time: 1532595045435,
        code: 'a',
        abi: '[]',
        method: 'foo',
        params: [],
        signature: 'b82f8165a22fb9a7cc46e862ac83042e1295119f98eb940428074fe49396109f1eaa7087f2623a0abbaafa9a35d3ac19c6086fd96f4a1eec7ef683373425d6f900',
        hertz: 0,
        fromName: undefined,
        toName: undefined,
        address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30c'
      },
      T1_str: '{"hash":"1d6aca3a91c9ad81f36d0e52e47992257ba4c5309916ca370a2a37e9abad2e1f","type":0,"from":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d","to":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b","value":5,"code":"a","abi":"[]","method":"foo","params":[],"time":1532595045435,"signature":"b82f8165a22fb9a7cc46e862ac83042e1295119f98eb940428074fe49396109f1eaa7087f2623a0abbaafa9a35d3ac19c6086fd96f4a1eec7ef683373425d6f900","hertz":0,"address":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30c"}',
      type0: {
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        value: 5,
        time: 1532595045435
      },
      type0Hash: '4dbd495353f5022e7f1fb9577477bab6052dd25ff80136a0c85a5961385e7e94',
      type1: {
        type: 1,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        value: 5,
        time: 1532595045435,
        code: '6080604052348015600f57600080fd5b5060868061001e6000396000f300608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063e2179b8e146044575b600080fd5b348015604f57600080fd5b5060566058565b005b5600a165627a7a7230582049207ee8e40a7cec5e02ae4b17430f6213404d65ec20007be0695e4b613fcc4e0029',
        abi: [
            {
              constant: false,
              inputs: [],
              name: 'g',
              outputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
        id: '4a6069b7-d986-42b8-b22b-e577dbd4ead8'
      },
      type1Hash: '61676c505ae93799a3a8f7d35c17b7422ceace9bf53704f6d5c04c8d93ecadcf',
      type2: {
        type: 2,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        time: 1532595045435,
        method: 'g',
        abi: []
      },
      type2Hash: '7679d83c92cb7629d3e645f63907e14f7d0da60bf37b0e04558bf0b8e02347fe'
    },
    Contract: {
      C1: {
        source: 'contract x { function g() { } }',
        name: 'x',
        bytecode: '6080604052348015600f57600080fd5b5060868061001e6000396000f300608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063e2179b8e146044575b600080fd5b348015604f57600080fd5b5060566058565b005b5600a165627a7a7230582049207ee8e40a7cec5e02ae4b17430f6213404d65ec20007be0695e4b613fcc4e0029',
        abi: [
            {
              constant: false,
              inputs: [],
              name: 'g',
              outputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
        address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30c'
      }
    },
    Network: {
      delegates: [
        {
          address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
          endpoint: {
            host: '127.0.0.1',
            port: 1000
          },
          type: 'Delegate'
        },
        {
          address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
          endpoint: {
            host: '127.0.0.1',
            port: 1001
          },
          type: 'Delegate'
        }
      ]
    }
  };

  // Network Stub for GET requests
  DisNodeSDK.Network.prototype.GET = (options, callback) => {
    switch (options.path) {
    case '/v1/delegates':
      callback(null, {
        data: stubData.Network.delegates
      });
      break;
    case '/v1/accounts/fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d':
      callback(null, {
        status: 'Ok',
        data: {
          balance: 10,
          created: +(new Date('2018-07-21T06:14:31.300253473Z')),
          updated: +(new Date('2018-07-21T06:14:31.300253473Z'))
        }
      })
      break;
    case '/v1/statuses/4a6069b7-d986-42b8-b22b-e577dbd4ead8':
      callback(null, {
        id: '4a6069b7-d986-42b8-b22b-e577dbd4ead8',
        type: 'NewTransaction',
        status: 'Ok',
        created: '2018-07-27T18:14:40.809768288Z',
        contractAddress: stubData.Contract.C1.address
      });
      break;
    default:
      throw Error('Unknown path: "' + options.path + '"');
    }
  };

  // Network Stub for POST requests
  DisNodeSDK.Network.prototype.POST = (options, data, callback) => {
    switch (options.path) {
    case '/v1/transactions':
      callback(null, {
        id: '4a6069b7-d986-42b8-b22b-e577dbd4ead8',
        type: 'NewTransaction',
        status: 'Pending',
        created: '2018-07-27T18:14:40.809768288Z'
      });
      break;
    default:
      throw Error('Unknown path: "' + options.path + '"');
    }
  };

  return stubData;
};
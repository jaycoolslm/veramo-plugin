var e=require("daf-key-manager"),t={components:{schemas:{IMyAgentPluginFooArgs:{type:"object",properties:{did:{type:"string",description:"Decentralized identifier"},bar:{type:"string",description:"bar"}}}},methods:{myPluginFoo:{description:"Does foo",arguments:{$ref:"#/components/schemas/IMyAgentPluginFooArgs"},returnType:{type:"string"}}}}},r=function(){function e(){this.schema=t,this.methods={myPluginFoo:this.myPluginFoo.bind(this)}}return e.prototype.myPluginFoo=function(e,t){try{return Promise.resolve(t.agent.resolveDid({didUrl:e.did})).then(function(t){return console.log(t),e.bar})}catch(e){return Promise.reject(e)}},e}();function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var o=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.createKey=function(e){var t=e.type;try{switch(t){case"Ed25519":throw Error("KeyManagementSystem createKey Ed25519 not implemented");case"Secp256k1":throw Error("KeyManagementSystem createKey Secp256k1 not implemented");default:throw Error("Key type not supported: "+t)}return Promise.resolve(void 0)}catch(e){return Promise.reject(e)}},r.deleteKey=function(e){try{throw Error("KeyManagementSystem deleteKey not implemented")}catch(e){return Promise.reject(e)}},r.encryptJWE=function(e){try{throw Error("KeyManagementSystem encryptJWE not implemented")}catch(e){return Promise.reject(e)}},r.decryptJWE=function(e){try{throw Error("KeyManagementSystem decryptJWE not implemented")}catch(e){return Promise.reject(e)}},r.signEthTX=function(e){try{throw Error("KeyManagementSystem signEthTX not implemented")}catch(e){return Promise.reject(e)}},r.signJWT=function(e){try{throw Error("KeyManagementSystem signJWT not implemented")}catch(e){return Promise.reject(e)}},t}(e.AbstractKeyManagementSystem),c=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.get=function(e){try{throw Error("KeyStore get not implemented")}catch(e){return Promise.reject(e)}},r.delete=function(e){try{throw Error("KeyStore delete not implemented")}catch(e){return Promise.reject(e)}},r.import=function(e){try{throw Error("KeyStore import not implemented")}catch(e){return Promise.reject(e)}},t}(e.AbstractKeyStore),i=function(e){function t(t){var r;if((r=e.call(this)||this).secretKey=t,!t)throw Error("Secret key is required");return r}n(t,e);var r=t.prototype;return r.encrypt=function(e){try{throw Error("SecretBox encrypt not implemented")}catch(e){return Promise.reject(e)}},r.decrypt=function(e){try{throw Error("SecretBox decrypt not implemented")}catch(e){return Promise.reject(e)}},t}(e.AbstractSecretBox);exports.KeyManagementSystem=o,exports.KeyStore=c,exports.MyAgentPlugin=r,exports.SecretBox=i;
//# sourceMappingURL=index.js.map

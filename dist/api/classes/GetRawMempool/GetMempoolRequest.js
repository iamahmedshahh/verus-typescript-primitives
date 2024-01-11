"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMemPoolRequest = void 0;
const ApiRequest_1 = require("../../ApiRequest");
const cmds_1 = require("../../../constants/cmds");
class GetMemPoolRequest extends ApiRequest_1.ApiRequest {
    constructor(chain) {
        super(chain, cmds_1.GET_BLOCK);
    }
    getParams() {
        return null;
    }
    static fromJson(object) {
        return new GetMemPoolRequest(object.chain);
    }
    toJson() {
        return {
            chain: this.chain,
        };
    }
}
exports.GetMemPoolRequest = GetMemPoolRequest;

import { ApiRequest } from "../../ApiRequest";
import { RequestParams, ApiPrimitiveJson } from "../../ApiPrimitive";
export declare class GetMemPoolRequest extends ApiRequest {
    tx: Array<string>;
    constructor(chain: string);
    getParams(): RequestParams;
    static fromJson(object: ApiPrimitiveJson): GetMemPoolRequest;
    toJson(): ApiPrimitiveJson;
}

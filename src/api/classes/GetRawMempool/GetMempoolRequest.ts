import { ApiRequest } from "../../ApiRequest";
import { RequestParams, ApiPrimitiveJson } from "../../ApiPrimitive";
import { GET_BLOCK } from "../../../constants/cmds";

export class GetMemPoolRequest extends ApiRequest {
  tx: Array<string>;
  constructor(chain: string) {
    super(chain, GET_BLOCK);
  }

  getParams(): RequestParams {
    return null;
  }

  static fromJson(object: ApiPrimitiveJson): GetMemPoolRequest {
    return new GetMemPoolRequest(
      object.chain as string,
    );
  }

  toJson(): ApiPrimitiveJson {
    return {
      chain: this.chain,
    };
  }
}

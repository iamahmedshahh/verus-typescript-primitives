import { BlockInfo } from "../../../block/BlockInfo";
import { ApiResponse } from "../../ApiResponse";

export class GetMempoolResponse extends ApiResponse {
  result: string | Array<string>;
}

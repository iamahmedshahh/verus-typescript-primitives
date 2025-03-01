import { GetAddressBalanceRequest } from './GetAddressBalance/GetAddressBalanceRequest'
import { GetAddressBalanceResponse } from './GetAddressBalance/GetAddressBalanceResponse'
import { GetAddressDeltasRequest } from './GetAddressDeltas/GetAddressDeltasRequest'
import { GetAddressDeltasResponse } from './GetAddressDeltas/GetAddressDeltasResponse'
import { GetAddressUtxosRequest } from './GetAddressUtxos/GetAddressUtxosRequest'
import { GetAddressUtxosResponse } from './GetAddressUtxos/GetAddressUtxosResponse'
import { GetBlockRequest } from './GetBlock/GetBlockRequest'
import { GetBlockResponse } from './GetBlock/GetBlockResponse'
import { GetVdxfIdRequest } from './GetVdxfId/GetVdxfIdRequest'
import { GetVdxfIdResponse } from './GetVdxfId/GetVdxfIdResponse'
import { GetIdentityRequest } from './GetIdentity/GetIdentityRequest'
import { GetIdentityResponse } from './GetIdentity/GetIdentityResponse'
import { GetCurrencyRequest } from './GetCurrency/GetCurrencyRequest'
import { GetCurrencyResponse } from './GetCurrency/GetCurrencyResponse'
import { GetInfoRequest } from './GetInfo/GetInfoRequest'
import { GetInfoResponse } from './GetInfo/GetInfoResponse'
import { GetOffersRequest } from './GetOffers/GetOffersRequest'
import { GetOffersResponse } from './GetOffers/GetOffersResponse'
import { GetRawTransactionRequest } from './GetRawTransaction/GetRawTransactionRequest'
import { GetRawTransactionResponse } from './GetRawTransaction/GetRawTransactionResponse'
import { MakeOfferRequest } from './MakeOffer/MakeOfferRequest'
import { MakeOfferResponse } from './MakeOffer/MakeOfferResponse'
import { SendRawTransactionRequest } from './SendRawTransaction/SendRawTransactionRequest'
import { SendRawTransactionResponse } from './SendRawTransaction/SendRawTransactionResponse'
import { SignMessageRequest } from './SignMessage/SignMessageRequest'
import { SignMessageResponse } from './SignMessage/SignMessageResponse'
import { VerifyMessageRequest } from './VerifyMessage/VerifyMessageRequest'
import { VerifyMessageResponse } from './VerifyMessage/VerifyMessageResponse'
import { GetAddressMempoolResponse } from './GetAddressMempool/GetAddressMempoolResponse'
import { GetAddressMempoolRequest } from './GetAddressMempool/GetAddressMempoolRequest'
import { SendCurrencyRequest } from './SendCurrency/SendCurrencyRequest'
import { SendCurrencyResponse } from './SendCurrency/SendCurrencyResponse'
import { FundRawTransactionRequest } from './FundRawTransaction/FundRawTransactionRequest'
import { FundRawTransactionResponse } from './FundRawTransaction/FundRawTransactionResponse'
import { GetCurrencyConvertersRequest } from './GetCurrencyConverters/GetCurrencyConvertersRequest'
import { GetCurrencyConvertersResponse } from './GetCurrencyConverters/GetCurrencyConvertersResponse'
import { ListCurrenciesRequest } from './ListCurrencies/ListCurrenciesRequest'
import { ListCurrenciesResponse } from './ListCurrencies/ListCurrenciesResponse'
import { EstimateConversionRequest } from './EstimateConversion/EstimateConversionRequest'
import { EstimateConversionResponse } from './EstimateConversion/EstimateConversionResponse'
import {GetMemPoolRequest} from './GetRawMempool/GetMempoolRequest'
import {GetMempoolResponse} from './GetRawMempool/GetMempoolResponse'
import { type } from 'os'

export {
  GetAddressBalanceRequest,
  GetAddressBalanceResponse,
  GetMemPoolRequest,
  GetMempoolResponse,
  GetAddressDeltasRequest,
  GetAddressDeltasResponse,
  GetAddressMempoolRequest,
  GetAddressMempoolResponse,
  GetAddressUtxosRequest,
  GetAddressUtxosResponse,
  GetBlockRequest,
  GetBlockResponse,
  GetVdxfIdRequest,
  GetVdxfIdResponse,
  GetIdentityRequest,
  GetIdentityResponse,
  GetCurrencyRequest,
  GetCurrencyResponse,
  GetOffersRequest,
  GetOffersResponse,
  GetRawTransactionRequest,
  GetRawTransactionResponse,
  MakeOfferRequest,
  MakeOfferResponse,
  SendRawTransactionRequest,
  SendRawTransactionResponse,
  GetInfoRequest,
  GetInfoResponse,
  VerifyMessageRequest,
  VerifyMessageResponse,
  SignMessageRequest,
  SignMessageResponse,
  SendCurrencyRequest,
  SendCurrencyResponse,
  FundRawTransactionRequest,
  FundRawTransactionResponse,
  GetCurrencyConvertersRequest,
  GetCurrencyConvertersResponse,
  ListCurrenciesRequest,
  ListCurrenciesResponse,
  EstimateConversionRequest,
  EstimateConversionResponse
}

export type RpcRequest =
  | typeof MakeOfferRequest
  |  typeof GetMemPoolRequest
  | typeof GetOffersRequest
  | typeof GetAddressBalanceRequest
  | typeof GetAddressDeltasRequest
  | typeof GetAddressMempoolRequest
  | typeof GetAddressUtxosRequest
  | typeof GetBlockRequest
  | typeof GetVdxfIdRequest
  | typeof GetInfoRequest
  | typeof GetIdentityRequest
  | typeof GetCurrencyRequest
  | typeof SendRawTransactionRequest
  | typeof GetRawTransactionRequest
  | typeof VerifyMessageRequest
  | typeof SignMessageRequest
  | typeof SendCurrencyRequest
  | typeof FundRawTransactionRequest
  | typeof GetCurrencyConvertersRequest
  | typeof ListCurrenciesRequest
  | typeof EstimateConversionRequest;

export type RpcResponse =
  | typeof MakeOfferResponse
  | typeof GetMempoolResponse
  | typeof GetOffersResponse
  | typeof GetAddressBalanceResponse
  | typeof GetAddressDeltasResponse
  | typeof GetAddressMempoolResponse
  | typeof GetAddressUtxosResponse
  | typeof GetBlockResponse
  | typeof GetVdxfIdResponse
  | typeof GetInfoResponse
  | typeof GetIdentityResponse
  | typeof GetCurrencyResponse
  | typeof SendRawTransactionResponse
  | typeof GetRawTransactionResponse
  | typeof VerifyMessageResponse
  | typeof SignMessageResponse
  | typeof SendCurrencyResponse
  | typeof FundRawTransactionResponse
  | typeof GetCurrencyConvertersResponse
  | typeof ListCurrenciesResponse
  | typeof EstimateConversionResponse;

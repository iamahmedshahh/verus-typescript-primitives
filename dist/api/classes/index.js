"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateConversionResponse = exports.EstimateConversionRequest = exports.ListCurrenciesResponse = exports.ListCurrenciesRequest = exports.GetCurrencyConvertersResponse = exports.GetCurrencyConvertersRequest = exports.FundRawTransactionResponse = exports.FundRawTransactionRequest = exports.SendCurrencyResponse = exports.SendCurrencyRequest = exports.SignMessageResponse = exports.SignMessageRequest = exports.VerifyMessageResponse = exports.VerifyMessageRequest = exports.GetInfoResponse = exports.GetInfoRequest = exports.SendRawTransactionResponse = exports.SendRawTransactionRequest = exports.MakeOfferResponse = exports.MakeOfferRequest = exports.GetRawTransactionResponse = exports.GetRawTransactionRequest = exports.GetOffersResponse = exports.GetOffersRequest = exports.GetCurrencyResponse = exports.GetCurrencyRequest = exports.GetIdentityResponse = exports.GetIdentityRequest = exports.GetVdxfIdResponse = exports.GetVdxfIdRequest = exports.GetBlockResponse = exports.GetBlockRequest = exports.GetAddressUtxosResponse = exports.GetAddressUtxosRequest = exports.GetAddressMempoolResponse = exports.GetAddressMempoolRequest = exports.GetAddressDeltasResponse = exports.GetAddressDeltasRequest = exports.GetMempoolResponse = exports.GetMemPoolRequest = exports.GetAddressBalanceResponse = exports.GetAddressBalanceRequest = void 0;
const GetAddressBalanceRequest_1 = require("./GetAddressBalance/GetAddressBalanceRequest");
Object.defineProperty(exports, "GetAddressBalanceRequest", { enumerable: true, get: function () { return GetAddressBalanceRequest_1.GetAddressBalanceRequest; } });
const GetAddressBalanceResponse_1 = require("./GetAddressBalance/GetAddressBalanceResponse");
Object.defineProperty(exports, "GetAddressBalanceResponse", { enumerable: true, get: function () { return GetAddressBalanceResponse_1.GetAddressBalanceResponse; } });
const GetAddressDeltasRequest_1 = require("./GetAddressDeltas/GetAddressDeltasRequest");
Object.defineProperty(exports, "GetAddressDeltasRequest", { enumerable: true, get: function () { return GetAddressDeltasRequest_1.GetAddressDeltasRequest; } });
const GetAddressDeltasResponse_1 = require("./GetAddressDeltas/GetAddressDeltasResponse");
Object.defineProperty(exports, "GetAddressDeltasResponse", { enumerable: true, get: function () { return GetAddressDeltasResponse_1.GetAddressDeltasResponse; } });
const GetAddressUtxosRequest_1 = require("./GetAddressUtxos/GetAddressUtxosRequest");
Object.defineProperty(exports, "GetAddressUtxosRequest", { enumerable: true, get: function () { return GetAddressUtxosRequest_1.GetAddressUtxosRequest; } });
const GetAddressUtxosResponse_1 = require("./GetAddressUtxos/GetAddressUtxosResponse");
Object.defineProperty(exports, "GetAddressUtxosResponse", { enumerable: true, get: function () { return GetAddressUtxosResponse_1.GetAddressUtxosResponse; } });
const GetBlockRequest_1 = require("./GetBlock/GetBlockRequest");
Object.defineProperty(exports, "GetBlockRequest", { enumerable: true, get: function () { return GetBlockRequest_1.GetBlockRequest; } });
const GetBlockResponse_1 = require("./GetBlock/GetBlockResponse");
Object.defineProperty(exports, "GetBlockResponse", { enumerable: true, get: function () { return GetBlockResponse_1.GetBlockResponse; } });
const GetVdxfIdRequest_1 = require("./GetVdxfId/GetVdxfIdRequest");
Object.defineProperty(exports, "GetVdxfIdRequest", { enumerable: true, get: function () { return GetVdxfIdRequest_1.GetVdxfIdRequest; } });
const GetVdxfIdResponse_1 = require("./GetVdxfId/GetVdxfIdResponse");
Object.defineProperty(exports, "GetVdxfIdResponse", { enumerable: true, get: function () { return GetVdxfIdResponse_1.GetVdxfIdResponse; } });
const GetIdentityRequest_1 = require("./GetIdentity/GetIdentityRequest");
Object.defineProperty(exports, "GetIdentityRequest", { enumerable: true, get: function () { return GetIdentityRequest_1.GetIdentityRequest; } });
const GetIdentityResponse_1 = require("./GetIdentity/GetIdentityResponse");
Object.defineProperty(exports, "GetIdentityResponse", { enumerable: true, get: function () { return GetIdentityResponse_1.GetIdentityResponse; } });
const GetCurrencyRequest_1 = require("./GetCurrency/GetCurrencyRequest");
Object.defineProperty(exports, "GetCurrencyRequest", { enumerable: true, get: function () { return GetCurrencyRequest_1.GetCurrencyRequest; } });
const GetCurrencyResponse_1 = require("./GetCurrency/GetCurrencyResponse");
Object.defineProperty(exports, "GetCurrencyResponse", { enumerable: true, get: function () { return GetCurrencyResponse_1.GetCurrencyResponse; } });
const GetInfoRequest_1 = require("./GetInfo/GetInfoRequest");
Object.defineProperty(exports, "GetInfoRequest", { enumerable: true, get: function () { return GetInfoRequest_1.GetInfoRequest; } });
const GetInfoResponse_1 = require("./GetInfo/GetInfoResponse");
Object.defineProperty(exports, "GetInfoResponse", { enumerable: true, get: function () { return GetInfoResponse_1.GetInfoResponse; } });
const GetOffersRequest_1 = require("./GetOffers/GetOffersRequest");
Object.defineProperty(exports, "GetOffersRequest", { enumerable: true, get: function () { return GetOffersRequest_1.GetOffersRequest; } });
const GetOffersResponse_1 = require("./GetOffers/GetOffersResponse");
Object.defineProperty(exports, "GetOffersResponse", { enumerable: true, get: function () { return GetOffersResponse_1.GetOffersResponse; } });
const GetRawTransactionRequest_1 = require("./GetRawTransaction/GetRawTransactionRequest");
Object.defineProperty(exports, "GetRawTransactionRequest", { enumerable: true, get: function () { return GetRawTransactionRequest_1.GetRawTransactionRequest; } });
const GetRawTransactionResponse_1 = require("./GetRawTransaction/GetRawTransactionResponse");
Object.defineProperty(exports, "GetRawTransactionResponse", { enumerable: true, get: function () { return GetRawTransactionResponse_1.GetRawTransactionResponse; } });
const MakeOfferRequest_1 = require("./MakeOffer/MakeOfferRequest");
Object.defineProperty(exports, "MakeOfferRequest", { enumerable: true, get: function () { return MakeOfferRequest_1.MakeOfferRequest; } });
const MakeOfferResponse_1 = require("./MakeOffer/MakeOfferResponse");
Object.defineProperty(exports, "MakeOfferResponse", { enumerable: true, get: function () { return MakeOfferResponse_1.MakeOfferResponse; } });
const SendRawTransactionRequest_1 = require("./SendRawTransaction/SendRawTransactionRequest");
Object.defineProperty(exports, "SendRawTransactionRequest", { enumerable: true, get: function () { return SendRawTransactionRequest_1.SendRawTransactionRequest; } });
const SendRawTransactionResponse_1 = require("./SendRawTransaction/SendRawTransactionResponse");
Object.defineProperty(exports, "SendRawTransactionResponse", { enumerable: true, get: function () { return SendRawTransactionResponse_1.SendRawTransactionResponse; } });
const SignMessageRequest_1 = require("./SignMessage/SignMessageRequest");
Object.defineProperty(exports, "SignMessageRequest", { enumerable: true, get: function () { return SignMessageRequest_1.SignMessageRequest; } });
const SignMessageResponse_1 = require("./SignMessage/SignMessageResponse");
Object.defineProperty(exports, "SignMessageResponse", { enumerable: true, get: function () { return SignMessageResponse_1.SignMessageResponse; } });
const VerifyMessageRequest_1 = require("./VerifyMessage/VerifyMessageRequest");
Object.defineProperty(exports, "VerifyMessageRequest", { enumerable: true, get: function () { return VerifyMessageRequest_1.VerifyMessageRequest; } });
const VerifyMessageResponse_1 = require("./VerifyMessage/VerifyMessageResponse");
Object.defineProperty(exports, "VerifyMessageResponse", { enumerable: true, get: function () { return VerifyMessageResponse_1.VerifyMessageResponse; } });
const GetAddressMempoolResponse_1 = require("./GetAddressMempool/GetAddressMempoolResponse");
Object.defineProperty(exports, "GetAddressMempoolResponse", { enumerable: true, get: function () { return GetAddressMempoolResponse_1.GetAddressMempoolResponse; } });
const GetAddressMempoolRequest_1 = require("./GetAddressMempool/GetAddressMempoolRequest");
Object.defineProperty(exports, "GetAddressMempoolRequest", { enumerable: true, get: function () { return GetAddressMempoolRequest_1.GetAddressMempoolRequest; } });
const SendCurrencyRequest_1 = require("./SendCurrency/SendCurrencyRequest");
Object.defineProperty(exports, "SendCurrencyRequest", { enumerable: true, get: function () { return SendCurrencyRequest_1.SendCurrencyRequest; } });
const SendCurrencyResponse_1 = require("./SendCurrency/SendCurrencyResponse");
Object.defineProperty(exports, "SendCurrencyResponse", { enumerable: true, get: function () { return SendCurrencyResponse_1.SendCurrencyResponse; } });
const FundRawTransactionRequest_1 = require("./FundRawTransaction/FundRawTransactionRequest");
Object.defineProperty(exports, "FundRawTransactionRequest", { enumerable: true, get: function () { return FundRawTransactionRequest_1.FundRawTransactionRequest; } });
const FundRawTransactionResponse_1 = require("./FundRawTransaction/FundRawTransactionResponse");
Object.defineProperty(exports, "FundRawTransactionResponse", { enumerable: true, get: function () { return FundRawTransactionResponse_1.FundRawTransactionResponse; } });
const GetCurrencyConvertersRequest_1 = require("./GetCurrencyConverters/GetCurrencyConvertersRequest");
Object.defineProperty(exports, "GetCurrencyConvertersRequest", { enumerable: true, get: function () { return GetCurrencyConvertersRequest_1.GetCurrencyConvertersRequest; } });
const GetCurrencyConvertersResponse_1 = require("./GetCurrencyConverters/GetCurrencyConvertersResponse");
Object.defineProperty(exports, "GetCurrencyConvertersResponse", { enumerable: true, get: function () { return GetCurrencyConvertersResponse_1.GetCurrencyConvertersResponse; } });
const ListCurrenciesRequest_1 = require("./ListCurrencies/ListCurrenciesRequest");
Object.defineProperty(exports, "ListCurrenciesRequest", { enumerable: true, get: function () { return ListCurrenciesRequest_1.ListCurrenciesRequest; } });
const ListCurrenciesResponse_1 = require("./ListCurrencies/ListCurrenciesResponse");
Object.defineProperty(exports, "ListCurrenciesResponse", { enumerable: true, get: function () { return ListCurrenciesResponse_1.ListCurrenciesResponse; } });
const EstimateConversionRequest_1 = require("./EstimateConversion/EstimateConversionRequest");
Object.defineProperty(exports, "EstimateConversionRequest", { enumerable: true, get: function () { return EstimateConversionRequest_1.EstimateConversionRequest; } });
const EstimateConversionResponse_1 = require("./EstimateConversion/EstimateConversionResponse");
Object.defineProperty(exports, "EstimateConversionResponse", { enumerable: true, get: function () { return EstimateConversionResponse_1.EstimateConversionResponse; } });
const GetMempoolRequest_1 = require("./GetRawMempool/GetMempoolRequest");
Object.defineProperty(exports, "GetMemPoolRequest", { enumerable: true, get: function () { return GetMempoolRequest_1.GetMemPoolRequest; } });
const GetMempoolResponse_1 = require("./GetRawMempool/GetMempoolResponse");
Object.defineProperty(exports, "GetMempoolResponse", { enumerable: true, get: function () { return GetMempoolResponse_1.GetMempoolResponse; } });

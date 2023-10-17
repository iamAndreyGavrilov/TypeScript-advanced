"use strict";
// // Код к упражнению: Типизировать запрос и ответы
// //
// //     Запрос в виде платежа
// // {
// //     "sum": 10000,
// //     "from": 2,
// //     "to": 4
// // }
// // Возможные ответы:
// // {
// //     "status": "success",
// //     "data": {
// //     "databaseId": 567,
// //         "sum": 10000,
// //         "from": 2,
// //         "to": 4
// // }
// // },
// // {
// //     "status": "failed",
// //     "data": {
// //     "errorMessage": "Недостаточно средств",
// //         "errorCode": 4
// // }
// // }
//
// enum Status {
//     Success = 'success',
//     Failed = 'failed',
// }
//
// interface IRequestDto {
//     sum: number;
//     from: number;
//     to: number;
// }
//
// interface ISuccessResponseDto extends IRequestDto {
//     databaseId: number;
// }
//
// interface IFailedResponseDto {
//     errorMessage: string;
//     errorCode: number;
// }
//
// // лучше разделить Success и Failed на два Response
// interface ISuccessResponse {
//     status: Status.Success;
//     data: ISuccessResponseDto;
// }
//
// interface IFailedResponse {
//     status: Status.Failed;
//     data: IFailedResponseDto;
// }
//
//

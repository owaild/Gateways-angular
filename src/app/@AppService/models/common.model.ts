import { ResultStatusEnum } from '../Enums/common';

export interface BaseResult {
  result: number;
  message: string;
}



export interface ResponseDto<T> {
  result: ResultStatusEnum;
  message: string;
  responseData: T;
}

import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class OrderService
	{

		private URL_ORDER_ADD: string = `${environment.API_URL}/order`;
		private URL_ORDER_BY_ID: string = `${environment.API_URL}/order`;
		private URL_ORDER_SET_BUSINESS: string = `${environment.API_URL}/order/setBusiness`;
		

		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async add
		(
			creatorId: string,
            packageId: string,
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					creatorId: creatorId,
					packageId: packageId
				};
				const result = await this.httpInterceptor.post(
					this.URL_ORDER_ADD,
					headers,
					body
				);

				return result;
			}

		async getOrderById
		(
			orderId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url: string = `${this.URL_ORDER_BY_ID}/${orderId}`

				const result = await this.httpInterceptor.get(
					url,
					headers
				);

				return result;
			}

		async assignBusinessToOrder
		(
			orderId: string,
			businessId: string,
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					orderId: orderId,
					businessId: businessId
				};
				const result = await this.httpInterceptor.post(
					this.URL_ORDER_SET_BUSINESS,
					headers,
					body
				);

				return result;
			}
	}

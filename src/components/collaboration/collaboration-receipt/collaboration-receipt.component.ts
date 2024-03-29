import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gtag } from 'angular-gtag';
import { ErrorHelper } from 'src/helper/errorHelper';
import { OrderService } from 'src/services/order/order.service';

@Component(
	{
		selector: 'collaboration-receipt',
		templateUrl: './collaboration-receipt.component.html',
		styleUrls: ['./collaboration-receipt.component.scss']
	}
)

export class CollaborationReceiptComponent implements OnInit
	{
		
		isLoading:boolean = false;
		orderId?:string;
		order?:any;
		business?:any;

		

		constructor(
			private orderService:OrderService,
			private route: ActivatedRoute,
			private router: Router,
			private errorHelper: ErrorHelper,
			private gtag: Gtag
		){}

		ngOnInit(): void {
			if
			(
				this.route
			)
				{
					this.route.params.subscribe(params => 
						{
							const orderIdParameter = params['orderId'];
							if
							(
								orderIdParameter
							)
								{
									this.orderId = orderIdParameter;
									this.getOrderById();
									this.notifyReturnFromStripe();
								}
							else
								{
									//Invalid data
									//this.navigate_findCreatorByZipCode();
									this.errorHelper.showErrorAsAlert('invalid data');
									
								}
							
						}
					);
				}
		}

		async getOrderById
		():Promise<void>
			{
				if
				(
					this.orderId
				)
					{
						try
							{
								this.isLoading = true;

								const data = await this.orderService.getOrderById(
									this.orderId
								);
		
								this.order = data.order;

								console.log(this.order);
								
								
								this.isLoading = false;
							}
						catch
						(
							error:any
						)
							{
								this.isLoading = false;
								this.errorHelper.showErrorAsAlert(error.mesage);
							}
						
					}
				
			}


		async notifyReturnFromStripe
		():Promise<void>
			{
				if
				(
					this.orderId
				)
					{
						try
						{
							this.isLoading = true;
	
							const data = await this.orderService.notifyReturnFromBank(
								this.orderId
							);

							this.gtag.event(
								'purchase',
								{ 
									currency: "USD",
									transaction_id: this.order._id,
									value: this.order.package.deposit,
									items:[
										{
											item_id: `SKU_${this.order.package._id.toString()}`,
											item_name: this.order.package.title,
											item_variant: this.order.creator._id.toString()
										}
									]
								}
							);
	
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							this.errorHelper.showErrorAsAlert(error.mesage);
						}
					}
				
			}
	}

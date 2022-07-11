import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class OrdersService {
    public orders: Order[] = [
        {
            id: 1,
            name: "Mg Mg",
            description: "Hello #001"
        },
        {
            id: 2,
            name: "Mi Mi",
            description: "World #002"
        }
    ];

    constructor(private eventEmitter: EventEmitter2) { }

    create(createOrderDto: CreateOrderDto) {
        const order = {
            id: this.orders.length + 1,
            ...createOrderDto
        }

        this.orders.push(order)

        const orderCreatedEvent = new OrderCreatedEvent()
        orderCreatedEvent.name = order.name;
        orderCreatedEvent.description = order.description;

        this.eventEmitter.emit('order.created', orderCreatedEvent)

        return order;
    }


}

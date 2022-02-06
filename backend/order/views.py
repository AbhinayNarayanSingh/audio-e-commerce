from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status

from core.models import *
from .serializers import *



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def test(request):

    user = request.user
    data = request.data
    orderItems = data['orderItems']

    # ! create order        Working
    order = Order.objects.create(
        user=user,
        paymentMethod=data['paymentMethod'],
        tax=data['tax'],
        shipping=data['Shipping'],
        total=data['cartTotal']
    )

    # ! create shipping address         Working
    address = request.data['shippingAddress']
    shippingAddress= ShippingAddress.objects.create(
        order=order,name=address['name'], phone=address['phone'], streetAddress=address['streetAddress'], city=address['city'], postalCode=address['postalCode'], state=address['state'], country=address['country']
        )

 # ! Create order items adn set order to orderItem relationship      working
    for i in orderItems:
        product = Product.objects.get(_id=i['product'])

        items = OrderItem.objects.create(
            product=product,
            order=order,
            name=product.name,
            qty=i['qty'],
            price=i['price'],
            image=product.image.url,
        )


    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)

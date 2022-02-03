from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *


app_name = 'core'

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')


@api_view(['GET'])
def getProducts(request):
    query = Product.objects.all()[:5]
    serializer = ProductSerializer(query, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    query = Product.objects.get(_id=pk)
    serializer = ProductSerializer(query)
    return Response(serializer.data)
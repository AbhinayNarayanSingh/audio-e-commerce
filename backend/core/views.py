from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .serializers import *


app_name = 'core'



@api_view(['GET'])
def getProducts(request):
    query = Product.objects.all()[:6]
    serializer = ProductSerializer(query, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProductsByCategory(request, category):
    query = Product.objects.filter(category=category)
    serializer = ProductSerializer(query, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    query = Product.objects.get(_id=pk)
    serializer = ProductSerializer(query)
    return Response(serializer.data)



@api_view(['GET'])
def getProductsTest(request):
    query = Product.objects.all()[:6]
    
    serializer = TestProductSerializer(query, many=True)
    return Response(serializer.data)


class CategoryAPI(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class FeatureProductAPI(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.exclude(countInStock = 0).order_by('?')[:1]



@api_view(['GET'])
def categoryProductAPI(request, pk):
    query = Product.objects.filter(category = pk)
    serializer = ProductSerializer(query, many=True)
    return Response(serializer.data)



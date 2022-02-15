from django.urls import path
from .views import *

app_name = 'core'

urlpatterns = [
    
    path("api/products/", getProducts),
    path("api/products/category/<str:category>", getProductsByCategory),

    path("api/products/<str:pk>/", getProduct),


    path("api/category/", CategoryAPI.as_view({'get': 'list'})),
    path("api/feature-product/", FeatureProductAPI.as_view({'get': 'list'})),
    path("api/products/category/<int:pk>", categoryProductAPI),


]
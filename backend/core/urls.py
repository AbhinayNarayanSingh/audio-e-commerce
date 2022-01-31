from django.urls import path
from .views import *

app_name = 'core'

urlpatterns = [
    path("api/", getRoutes),
    path("api/products/", getProducts),
    path("api/products/<str:pk>/", getProduct),
]
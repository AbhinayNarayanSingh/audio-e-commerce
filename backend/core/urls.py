from django.urls import path
from .views import *

app_name = 'core'

urlpatterns = [
    path("test/", ProductAPI.as_view({'get': 'list'})),
    path("api/", getRoutes),
    path("api/products/", getProducts),
    path("api/products/<str:pk>/", getProduct),
]
from django.urls import path
from .views import *

app_name = 'order'

urlpatterns = [
   path("order-create/", orderCreate), 
   path("order-view/", orderView) 
]
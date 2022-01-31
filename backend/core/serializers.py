from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

# serializers.ModelSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

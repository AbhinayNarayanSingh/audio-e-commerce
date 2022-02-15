from rest_framework import serializers
from .models import *
from user.models import User

# serializers.ModelSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name','pk']
        # fields = "__all__"



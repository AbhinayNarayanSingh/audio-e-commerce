from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

app_name = 'user'

urlpatterns = [
    path('api/user/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("api/user/profile/", getUserProfile, name="user-profile"),
    path("api/user/register/", registerUser, name="user-register"),
]
from django.urls import path, include
from .views import ventas

urlpatterns = [
    path('ventas/', ventas, name="ventas"),
]
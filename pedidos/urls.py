from django.urls import path, include
from .views import pedidos

urlpatterns = [
    path('pedidos/', pedidos, name="pedidos"),
]
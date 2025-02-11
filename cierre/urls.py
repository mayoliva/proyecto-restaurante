from django.urls import path, include
from .views import cierre

urlpatterns = [
    path('cierre/', cierre, name="cierre"),
]
from django.urls import path
from rest_framework import routers

from . import views

urlpatterns = [
    path("geofind/", views.getItemsView),
    path("test/", views.getMenuItems),
]

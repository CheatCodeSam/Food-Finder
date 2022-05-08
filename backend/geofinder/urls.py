from django.urls import path
from rest_framework import routers

from . import views

router = routers.SimpleRouter()

router.register(r"menuitem", views.MenuItemViewSet)

urlpatterns = [
    path("geofind/", views.getItemsView),
]

urlpatterns += router.urls

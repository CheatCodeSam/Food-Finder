from .models import MenuItem
from rest_framework import serializers


class MenuItemListSerializer(serializers.ModelSerializer):
    distance = serializers.CharField(allow_blank=True)

    class Meta:
        model = MenuItem
        fields = "__all__"

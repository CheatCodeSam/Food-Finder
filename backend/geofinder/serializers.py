from cmath import log
from .models import MenuItem
from rest_framework import serializers


class MenuItemListSerializer(serializers.ModelSerializer):
    distance = serializers.SerializerMethodField()

    def get_distance(self, obj):
        return float(self.context["distance"])

    class Meta:
        model = MenuItem
        fields = ("id", "title", "price", "distance")

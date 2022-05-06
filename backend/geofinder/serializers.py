from cmath import log

from rest_framework import serializers

from .models import MenuItem


class MenuItemListSerializer(serializers.ModelSerializer):
    distance = serializers.SerializerMethodField()

    def get_distance(self, obj):
        return float(self.context["distance"])

    class Meta:
        model = MenuItem
        fields = ("id", "title", "price", "distance")

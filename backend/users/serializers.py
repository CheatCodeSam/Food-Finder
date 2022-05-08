from rest_framework import serializers
from .models import User


class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("address", "id")

from rest_framework import mixins, viewsets

from .serializers import UserSettingsSerializer
from .models import User


class UserSettingsViewset(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet
):
    queryset = User.objects.all()
    serializer_class = UserSettingsSerializer

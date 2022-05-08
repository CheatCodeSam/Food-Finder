from rest_framework import mixins, viewsets

from .serializers import UserSettingsSerializer
from .models import User

from rest_framework.permissions import IsAuthenticated, BasePermission


class IsCreator(BasePermission):
    message = "You must be the creator of this object."

    def has_object_permission(self, request, view, obj):
        return obj.id == request.user.id


class UserSettingsViewset(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet
):
    permission_classes = [IsAuthenticated, IsCreator]

    queryset = User.objects.all()
    serializer_class = UserSettingsSerializer

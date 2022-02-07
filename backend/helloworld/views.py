import json
from django.contrib.auth.models import User, Group
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, GroupSerializer


def helloWorldView(request):
    return HttpResponse("Hello, World!")


def userView(request, userId):
    user = get_object_or_404(get_user_model(), pk=userId)
    dictionary = {
        "id": user.username,
        "email": user.email,
    }
    json_object = json.dumps(dictionary, indent=4)
    return HttpResponse(json_object)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer

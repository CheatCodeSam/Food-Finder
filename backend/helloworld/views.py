import json
from django.contrib.auth.models import User, Group
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, GroupSerializer
import requests


def helloWorldView(request):
    api_key = "ENTER API KEY"
    headers = {
        "Authorization": "Bearer %s" % api_key,
    }
    response = requests.get(
        "https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972",
        headers=headers,
    )
    return HttpResponse(response.text)


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

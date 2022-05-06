import json
import random
from functools import partial

import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer

from .auth import BearerAuth
from .models import Business, MenuItem
from .serializers import MenuItemListSerializer
from .util import get_business_model


def create_menuitem_model(model_dict, biz):
    model = MenuItem(
        title=model_dict["title"],
        price=model_dict["price"][0],
        image=model_dict["img"],
        business=biz,
    )
    model.save()
    return model


def create_business_model(model_dict):
    print(model_dict)
    model = Business(
        title=model_dict["name"],
        slug=model_dict["alias"],
        price="$",
        rating=model_dict["rating"],
        location=model_dict["location"]["address1"],
        city=model_dict["location"]["city"],
        state=model_dict["location"]["state"],
        url=model_dict["url"],
    )
    model.save()
    return model


def menu_item_but_no_placeholder(tag):
    classes = tag.get_attribute_list("class")
    return (
        "menu-item" in classes
        and not "menu-item-placeholder-photo" in classes
        and not "menu-item-no-photo" in classes
    )


def getItemsView(request):
    API_KEY = "vA48KOFhclsGtE0mdZ51qu2PccDsTb125ocpup71nwDZHgLV6zFsaY-Ysc-AIdMVfcqxF_l1j8Vdj0aNLzSsGvc6mSTDCF4j6sRC2Fr1pEBTwGIlvuuH5E0QxSwpYnYx"
    ENDPOINT = "https://api.yelp.com/v3/businesses/search"

    lat = request.GET.get("lat", None)
    long = request.GET.get("long", None)

    PARAMETERS = {
        "term": "food(all)",
        "limit": 20,
        "latitude": lat,
        "longitude": long,
        "radius": 10000,
    }
    response = requests.get(url=ENDPOINT, params=PARAMETERS, auth=BearerAuth(API_KEY))
    json_response = response.json()

    for business in json_response["businesses"]:
        get_business_model(business)

    return HttpResponse(response.text)


def getMenuItems(request):
    item = MenuItem.objects.get(pk=1)
    ser = MenuItemListSerializer(item, context={"distance": "100"})
    return HttpResponse(JSONRenderer().render(ser.data))

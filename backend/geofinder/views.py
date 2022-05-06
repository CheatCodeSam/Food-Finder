import json
import random
from functools import partial

import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer

from .auth import BearerAuth
from .models import MenuItem
from .serializers import MenuItemListSerializer
from .util import get_business_model, get_menuitem_models


def create_menuitem_model(model_dict, biz):
    model = MenuItem(
        title=model_dict["title"],
        price=model_dict["price"][0],
        image=model_dict["img"],
        business=biz,
    )
    model.save()
    return model


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
        biz_mod = get_business_model(business)
        get_menuitem_models(biz_mod)

    return HttpResponse(response.text)


def getMenuItems(request):
    item = MenuItem.objects.get(pk=1)
    ser = MenuItemListSerializer(item, context={"distance": "100"})
    return HttpResponse(JSONRenderer().render(ser.data))

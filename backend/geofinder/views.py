import json

import requests
from django.http import HttpResponse

from .auth import BearerAuth
from .models import MenuItem
from .serializers import MenuItemListSerializer
from .util import get_business_model


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

    business_distances = {}
    for business in json_response["businesses"]:
        business_distances[business["alias"]] = business["distance"]
        get_business_model(business)

    items = (
        MenuItem.objects.distinct()
        .filter(business__method_for_query__in=["MU", "RC"])
        .filter(business__slug__in=list(business_distances.keys()))
        .order_by("?")[:10]
    )
    ret = []
    for item in items:
        ser = MenuItemListSerializer(
            item,
            context={"distance": business_distances[item.business.slug]},
        )
        ret.append(ser.data)
    return HttpResponse(json.dumps(ret, indent=2))

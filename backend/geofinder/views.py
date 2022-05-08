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

    location = {}

    address = request.GET.get("address", "false")
    long = request.GET.get("long", None)
    lat = request.GET.get("lat", None)
    has_latlong = lat and long

    if address.lower() == "true" and request.user or not has_latlong and request.user:
        location = {"location": request.user.address}
    elif has_latlong:
        long = request.GET.get("long", None)
        lat = request.GET.get("lat", None)
        location = {
            "latitude": lat,
            "longitude": long,
        }
    else:
        return HttpResponse("[]")

    term = request.GET.get("term", "food")
    radius = request.GET.get("radius", "10000")
    price = request.GET.get("price", "1,2,3,4")

    PARAMETERS = {
        "term": term,
        "limit": 20,
        "category": "food",
        "radius": int(radius),
        "price": price,
    } | location

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

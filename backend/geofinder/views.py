from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from bs4 import BeautifulSoup
import random


def menu_item_but_no_placeholder(tag):
    classes = tag.get_attribute_list("class")
    return (
        "menu-item" in classes
        and not "menu-item-placeholder-photo" in classes
        and not "menu-item-no-photo" in classes
    )


def getItemsView(request):
    API_KEY = "vA48KOFhclsGtE0mdZ51qu2PccDsTb125ocpup71nwDZHgLV6zFsaY-Ysc-AIdMVfcqxF_l1j8Vdj0aNLzSsGvc6mSTDCF4j6sRC2Fr1pEBTwGIlvuuH5E0QxSwpYnYx"
    HEADERS = {
        "Authorization": "Bearer %s" % API_KEY,
    }
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
    response = requests.get(url=ENDPOINT, params=PARAMETERS, headers=HEADERS)
    json_response = json.loads(response.text)
    menu_items = []

    for business in json_response["businesses"]:
        resturant_slug = business["alias"]

        response = requests.get(
            f"https://www.yelp.com/menu/{resturant_slug}/", allow_redirects=False
        )
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "lxml")
            for link in soup.find_all(menu_item_but_no_placeholder):
                item = {}
                item["title"] = link.h4.text.strip().title()
                item["img"] = link.img["src"].replace("60s.jpg", "o.jpg")
                prices = []
                for price in link.find_all("li", {"class": "menu-item-price-amount"}):
                    prices.append(price.text.strip())
                item["price"] = prices

                item["rating"] = business["rating"]
                item["address"] = business["location"]["address1"]
                item["city"] = business["location"]["city"]
                item["state"] = business["location"]["state"]

                item["url"] = business["url"]

                item["business"] = business["name"]

                item["distance"] = business["distance"]
                menu_items.append(item)
    json_object = json.dumps(random.sample(menu_items, 10), indent=4)
    return HttpResponse(json_object)

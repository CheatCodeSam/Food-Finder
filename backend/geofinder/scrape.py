import requests
from bs4 import BeautifulSoup

from .models import Business, MenuItem


def create_menuitem_model(model_dict, biz):
    model = MenuItem(
        title=model_dict["title"],
        price="10",
        image=model_dict["img"],
        business=biz,
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


def scrape_menu(response_html: str) -> list:
    menu_items = []
    soup = BeautifulSoup(response_html, "lxml")
    for link in soup.find_all(menu_item_but_no_placeholder):
        item = {}
        item["title"] = link.h4.text.strip().title()
        item["img"] = link.img["src"].replace("60s.jpg", "o.jpg")
        prices = []
        for price in link.find_all("li", {"class": "menu-item-price-amount"}):
            prices.append(price.text.strip())
        item["price"] = prices
        menu_items.append(item)
    return menu_items


def scrape_rec(response_html: str) -> list:
    menu_items = []
    soup = BeautifulSoup(response_html, "lxml")
    for link in soup.select("div[class*=dishWrapper]"):
        item = {}
        item["title"] = link.p.text.strip().title()
        item["img"] = link.img["src"].replace("258s.jpg", "o.jpg")
        menu_items.append(item)
    return menu_items


def attempt_to_scrape_rec(business_pk: int):
    business = Business.objects.get(pk=business_pk)
    rec_response = requests.get(
        f"https://www.yelp.com/biz/{business.slug}", allow_redirects=False
    )
    if rec_response.status_code == 200:
        scraped_items = scrape_rec(rec_response.text)
        if len(scraped_items) > 0:
            for item in scraped_items:
                create_menuitem_model(item, business)
            business.method_for_query = "RC"
        else:
            business.method_for_query = "NA"
    else:
        business.method_for_query = "NA"
    business.save()

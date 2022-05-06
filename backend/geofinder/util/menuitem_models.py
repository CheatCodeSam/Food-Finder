import requests
from bs4 import BeautifulSoup

from ..models import Business, MenuItem


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


def get_menuitem_models(business: Business):
    if business.method_for_query == "RD":
        response = requests.get(
            f"https://www.yelp.com/menu/{business.slug}/", allow_redirects=False
        )
        if response.status_code == 200:
            scraped_items = scrape_menu(response.text)
            print(scraped_items)

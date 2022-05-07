import requests

from ..models import Business
from ..scrape import create_menuitem_model, scrape_menu
from ..tasks import attempt_to_scrape_rec_task


def get_menuitem_models(business: Business):
    if business.method_for_query == "RD":
        business.method_for_query = "LD"
        business.save()
        menu_response = requests.get(
            f"https://www.yelp.com/menu/{business.slug}/", allow_redirects=False
        )
        if menu_response.status_code == 200:
            scraped_items = scrape_menu(menu_response.text)
            if len(scraped_items) > 0:
                for item in scraped_items:
                    create_menuitem_model(item, business)
                business.method_for_query = "MU"
                business.save()
            else:
                attempt_to_scrape_rec_task.delay(business.id)
        else:
            attempt_to_scrape_rec_task.delay(business.id)

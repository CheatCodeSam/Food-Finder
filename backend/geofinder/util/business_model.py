from ..models import Business
from .menuitem_models import get_menuitem_models


def create_business_model(model_dict):
    has_location = (
        "address1" in model_dict["location"] and model_dict["location"]["address1"]
    )

    model = Business(
        title=model_dict["name"],
        yelp_id=model_dict["id"],
        slug=model_dict["alias"],
        price=model_dict["price"] if "price" in model_dict else "?",
        rating=model_dict["rating"],
        location=model_dict["location"]["address1"] if has_location else "?",
        city=model_dict["location"]["city"],
        state=model_dict["location"]["state"],
        url=model_dict["url"],
    )
    if not has_location:
        model.method_for_query = "NA"
    model.save()
    get_menuitem_models(model)
    return model


def get_business_model(business: dict) -> Business:
    slug = business["alias"]
    business_exists = Business.objects.filter(slug=slug).exists()
    if business_exists:
        return Business.objects.get(slug=slug)
    else:
        return create_business_model(business)

from ..models import Business


def create_business_model(model_dict):
    model = Business(
        title=model_dict["name"],
        slug=model_dict["alias"],
        price="$",
        rating=model_dict["rating"],
        location="..",
        city=model_dict["location"]["city"],
        state=model_dict["location"]["state"],
        url=model_dict["url"],
    )
    model.save()
    return model


def get_business_model(business: dict) -> Business:
    slug = business["alias"]
    business_exists = Business.objects.filter(slug=slug).exists()
    if business_exists:
        return Business.objects.get(slug=slug)
    else:
        return create_business_model(business)

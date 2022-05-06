from .models import Business


def get_business_model(resturant_slug) -> Business:
    business_exists = Business.objects.filter(slug=resturant_slug).exists()
    if business_exists:
        return Business.objects.get(slug=resturant_slug)

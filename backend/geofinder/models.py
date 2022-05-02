from django.db import models
from django.db import models


class Business(models.Model):
    class MethodForQuery(models.TextChoices):
        LOADING = "LD", "Loading"
        NONE = "NA", "None"
        MENU = "MU", "Menu"
        RECOMMENDED = "RC", "Recommended"

    title = models.CharField(max_length=100, null=False, blank=False)
    slug = models.SlugField(null=False, blank=False, unique=True)
    price = models.CharField(max_length=20, null=False, blank=False)
    rating = models.CharField(max_length=20, null=False, blank=False)
    location = models.CharField(max_length=100, null=False, blank=False)
    method_for_query = models.CharField(
        max_length=2,
        choices=MethodForQuery.choices,
        default=MethodForQuery.NONE,
    )

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    price = models.CharField(
        max_length=20,
        help_text="Item Price",
        null=True,
        blank=True,
    )

    image = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    business = models.ForeignKey(
        Business, on_delete=models.CASCADE, related_name="menuitems", null=True
    )

    def __str__(self):
        return self.title

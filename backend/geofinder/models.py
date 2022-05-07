from django.db import models


class Business(models.Model):
    class MethodForQuery(models.TextChoices):
        LOADING = "LD", "Loading"
        NONE = "NA", "None"
        MENU = "MU", "Menu"
        RECOMMENDED = "RC", "Recommended"
        READY = "RD", "Ready"

    title = models.CharField(max_length=255, null=False, blank=False)
    slug = models.SlugField(null=False, blank=False, unique=True, max_length=255)
    price = models.CharField(max_length=20, null=False, blank=False)
    rating = models.CharField(max_length=20, null=False, blank=False)
    location = models.CharField(max_length=255, null=False, blank=True)
    city = models.CharField(max_length=255, null=False, blank=False)
    state = models.CharField(max_length=255, null=False, blank=False)
    url = models.CharField(max_length=255, null=False, blank=False)
    method_for_query = models.CharField(
        max_length=2,
        choices=MethodForQuery.choices,
        default=MethodForQuery.READY,
    )

    def __str__(self):
        return self.title


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

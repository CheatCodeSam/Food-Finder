# Generated by Django 4.0.1 on 2022-05-08 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geofinder', '0007_alter_business_city_alter_business_location_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='yelp_id',
            field=models.CharField(default='.', max_length=255, unique=True),
            preserve_default=False,
        ),
    ]
# Generated by Django 4.0.1 on 2022-05-07 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geofinder', '0005_alter_business_method_for_query'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='url',
            field=models.CharField(max_length=255),
        ),
    ]
# Generated by Django 4.0.1 on 2022-05-03 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geofinder', '0002_menuitem_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='city',
            field=models.CharField(default='.', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='state',
            field=models.CharField(default='.', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='url',
            field=models.CharField(default='.', max_length=100),
            preserve_default=False,
        ),
    ]

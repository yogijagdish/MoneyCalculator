# Generated by Django 4.2 on 2023-04-28 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authentication", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="name",
            new_name="username",
        ),
    ]

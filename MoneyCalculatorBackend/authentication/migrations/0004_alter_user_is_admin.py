# Generated by Django 4.2 on 2023-05-29 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authentication", "0003_rename_username_user_name"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="is_admin",
            field=models.BooleanField(default=False),
        ),
    ]

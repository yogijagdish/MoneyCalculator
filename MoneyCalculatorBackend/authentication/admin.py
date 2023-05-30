from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from authentication.models import User
# Register your models here.


class UserAdmin(BaseUserAdmin):

    list_display = ["id","email","name","date_of_birth","is_admin"]

    list_filter = ["is_admin"]

    fieldsets = [
        ("Log in Credentials",{"fields":["email","password"]}),
        ("personal info",{"fields":["name","date_of_birth"]}),
        ("permissions",{"fields":["is_admin"]}),
    ]

    add_fieldsets = [(
        None,
        {
            "classes":["wide"],
            "fields": ["email","name","date_of_birth","password1","password2"]
        },

    ),]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = []

admin.site.register(User, UserAdmin)
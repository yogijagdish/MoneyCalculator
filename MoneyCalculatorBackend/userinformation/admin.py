from django.contrib import admin
from .models import Title

# Register your models here.
class TitleAdmin(admin.ModelAdmin):
    list_display = ['user_id','title','image','description']

admin.site.register(Title,TitleAdmin)
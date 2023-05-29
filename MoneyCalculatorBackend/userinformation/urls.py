from django.urls import path
from userinformation import views

urlpatterns = [
    path('title/',views.TitleView.as_view())
]

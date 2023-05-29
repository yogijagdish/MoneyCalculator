from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class TitleView(APIView):
    def get(self,request,format=None):
        user = request.user
        print(user)
        return Response({"data":"data obtained"})
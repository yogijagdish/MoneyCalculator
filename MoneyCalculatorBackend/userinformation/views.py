from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response

from authentication.models import User
from userinformation.models import Title

from authentication.serializers import UserProfileSerializer
from userinformation.serializers import TitleSerializer

# Create your views here.


class TitleView(APIView):
    def get(self,request,format=None):
        user = UserProfileSerializer(request.user)
        data = Title.objects.filter(user_id=user.data['id'])
        serializer = TitleSerializer(data,many=True)
        # serializer.is_valid(raise_exception=True)
        print(serializer.data)

        return Response({"data":serializer.data})
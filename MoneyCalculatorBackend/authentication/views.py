from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken

from authentication import serializers
# Create your views here.

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return{
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserRegistrationSerializer(data=request.data)

        ## it calls the validate function in serializer
        if serializer.is_valid(raise_exception=True):

            ## it calls the create function of serializer
            user = serializer.save()
            token = get_token_for_user(user)
            return Response({'token':token,"msg":"User Registration Sucessful"},status=status.HTTP_201_CREATED)
        return Response({"msg":"User Registration Unsucessful"},status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer = serializers.UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email,password=password)

            if user is not None:
                token = get_token_for_user(user)
                return Response({"token":token,"msg":"Log in Sucessful"},status=status.HTTP_200_OK)
            else:
                return Response({"msg":"User Not Found"},status=status.HTTP_404_NOT_FOUND)

        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    def get(self,request,format=None):
        serializer = serializers.UserProfileSerializer(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)
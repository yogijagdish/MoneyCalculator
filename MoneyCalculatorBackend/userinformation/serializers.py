from rest_framework import serializers

from .models import Title
from authentication.models import User


class TitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Title
        fields = ['user_id','title','image','description']
        extra_kwargs = {
            'user_id': {'source':'user'}
        }
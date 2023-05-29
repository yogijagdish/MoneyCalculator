from django.db import models

from authentication.models import User

# Create your models here.

class Title(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/',blank=True,null=True)
    description = models.CharField(max_length=255)

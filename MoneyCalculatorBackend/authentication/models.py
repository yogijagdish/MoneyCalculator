from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

# customizing django authentication

class UserManager(BaseUserManager):
    def create_user(self,email,date_of_birth,name,password=None,password2=None):
        if not email:
            raise ValueError("User must have Email ID")

        user = self.model(
            email=self.normalize_email(email),
            date_of_birth=date_of_birth,
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,date_of_birth,name,password=None):
        user = self.create_user(
            email,
            password=password,
            date_of_birth=date_of_birth,
            name=name
        )

        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
    )

    date_of_birth = models.DateField()
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name","date_of_birth"]

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        "Does the user have specific permissions"
        return self.is_admin

    def has_module_perms(self,app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member if staff"

        return self.is_admin
## To run this code 
``` bash
git clone https://github.com/yogijagdish/MoneyCalculator.git
```

## install virtual environment and activate it
``` bash
pip install virtualenv
virtualenv moneycalculator
source moneycalculator/bin/activate
```

## install django
``` bash 
pip install django
```

## install django rest framework
``` bash
pip install djangorestframework
```


## install mysqlclient for database
```bash
pip install mysqlclient
```
## create database in your mysql database
```bash 
create database MoneyCalculator;
```

## setup database
Go to the settings.py file and the search for `DATABASES` then replace its content with 
<br>
``` 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'USER': 'your user name',
        'PASSWORD': 'your sql password',
        'NAME': 'MoneyCalculator',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### install cors header 
```bash
pip install django-cors-headers
```
### install simple JWT(JSON Web Token)
```bash
pip install djangorestframework-simplejwt
```
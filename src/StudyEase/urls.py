from django.contrib import admin
from django.urls import path, include

from myapp.views import (
    home_view,
    signin_view, 
    signup_view
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]

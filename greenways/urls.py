"""greenways URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from greenways_app.views import home_page, travel_learn_page, food_learn_page, building_learn_page, calculator_page, contact_page

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_page, name='Greenways'),
    path('travel-learn/', travel_learn_page, name='Sustainable Travel'),
    path('food-learn/', food_learn_page, name='Sustainable Food'),
    path('building-learn/', building_learn_page, name='Sustainable Building'),
    path('calculator/', calculator_page, name='Carbon Travel Calculator'),
    path('contact/', contact_page, name='Contact Us')
]

from django.contrib import admin
from django.urls import path
from greenways_app.views import home_page, travel_learn_page, food_learn_page, building_learn_page, calculator_page, contact_page

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_page, name='home'),  # Change 'Greenways' to 'home'
    path('travel-learn/', travel_learn_page, name='travel_learn'),  # Change 'Sustainable Travel' to 'learn'
    path('food-learn/', food_learn_page, name='food_learn'),  # Change 'Sustainable Food' to 'learn'
    path('building-learn/', building_learn_page, name='building_learn'),  # Change 'Sustainable Building' to 'learn'
    path('calculator/', calculator_page, name='calculator'),  # Change 'Carbon Travel Calculator' to 'calculator'
    path('contact/', contact_page, name='contact_us'),  # Change 'Contact Us' to 'contact_us'
]

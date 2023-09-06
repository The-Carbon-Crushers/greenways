from django.shortcuts import render

# Create your views here.

def home_page(request):
    return render(request, 'index.html')

def travel_learn_page(request):
    return render(request, 'travel_learn.html')

def food_learn_page(request):
    return render(request, 'food_learn.html')

def building_learn_page(request):
    return render(request, 'building_learn.html')

def calculator_page(request):
    return render(request, 'calculator.html')

def contact_page(request):
    return render(request, 'contact.html')


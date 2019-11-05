from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse


# Create your views here.


def index(request):
    context = {}
    return render(request, 'index.html', context=context)

def detectTrafficSign(request):
    return JsonResponse({'data':'hihi'})
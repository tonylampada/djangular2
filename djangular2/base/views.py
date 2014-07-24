""" Views for the base application """
from django.http.response import HttpResponse

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def home(request):
    """ Default view for the root """
    return render(request, 'base/home.html')


@csrf_exempt
def login(request):
    print(request.POST)
    # request.
    return HttpResponse("")
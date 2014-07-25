""" Views for the base application """
from django.http.response import HttpResponse

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request):
    """ Default view for the root """
    return render_to_response('base/home.html', {},
                              context_instance=RequestContext(request))


def login(request):
    print(request.POST)
    return HttpResponse("")
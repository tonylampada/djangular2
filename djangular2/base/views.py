""" Views for the base application """
import json
from django.http.response import HttpResponse

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request):
    """ Default view for the root """
    return render_to_response('base/home.html', {},
                              context_instance=RequestContext(request))

# @csrf_exempt
def login(request):
    print('login: %s' % request.POST.get('username'))
    print('senha: %s' % request.POST.get('password'))
    return HttpResponse("")


def baba(request):
    print('jujuba: %s' % request.GET.get('jujuba'))
    resposta = {
        'mamae': 'papai',
        'titio': 4,
        'vovo': True
    }
    return HttpResponse(json.dumps(resposta))


def bibi(request):
    print('chocolate: %s' % request.POST.get('chocolate'))
    return HttpResponse("")

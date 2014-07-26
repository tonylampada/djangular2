""" Views for the base application """
import json
from django.http.response import HttpResponse

from django.contrib import auth
from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request):
    """ Default view for the root """
    return render_to_response('base/home.html', {},
                              context_instance=RequestContext(request))

# @csrf_exempt
def login(request):
    if request.user.is_authenticated():
        return HttpResponse("vc ja esta logado %s!" % request.user.username, status=401)
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = auth.authenticate(username=username, password=password)
    if user and user.is_active:
        auth.login(request, user)
        return HttpResponse("")
    else:
        return HttpResponse("credenciais incorretas", status=401)

    # print('login: %s' % request.POST.get('username'))
    # print('senha: %s' % request.POST.get('password'))
    # return HttpResponse("")

def logout(request):
    auth.logout(request)
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

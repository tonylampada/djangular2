from django.http.response import HttpResponse

__author__ = 'tony'


def login_required_ajax(f):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated():
            return f(request, *args, **kwargs)
        else:
            return HttpResponse("Vc precisa estar logado pra acessar essa funcionalidade", status=401)
    return wrapper

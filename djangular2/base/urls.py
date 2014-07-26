"""urlconf for the base application"""

from django.conf.urls import url, patterns


urlpatterns = patterns('base.views',
    url(r'^$', 'home', name='home'),
    url(r'^login$', 'login', name='login'),
    url(r'^baba$', 'baba', name='baba'),
    url(r'^bibi$', 'bibi', name='bibi'),
)

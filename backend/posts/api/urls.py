from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ScoreViewSet
from .views import UploadView

post_router = DefaultRouter()
post_router.register(r'score', ScoreViewSet)



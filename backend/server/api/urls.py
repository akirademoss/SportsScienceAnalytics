from rest_framework.routers import DefaultRouter
from posts.api.urls import post_router
from django.urls import path, include
from posts.api.views import UploadView

router = DefaultRouter()

#posts
router.registry.extend(post_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    path('upload/', UploadView.as_view(), name='upload')
]
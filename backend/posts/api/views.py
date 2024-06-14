from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import Score
from .serializers import ScoreSerializer
from django.core.files.storage import FileSystemStorage

class ScoreViewSet(ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

class UploadView(APIView):#request
    
    def post(self, request, format=None):
        context = {}
        file_obj = request.FILES['file']
        fs = FileSystemStorage()
        name = fs.save(file_obj.name, file_obj)
        context['url'] = fs.url(name)
        return Response(status=200)

from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from ..models import Score
from .serializers import ScoreSerializer
from django.core.files.storage import FileSystemStorage

class ScoreViewSet(ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

class UploadView(APIView):#request
    context = {}
   # if request.method == 'POST':
   #     uploaded_file = request.FILES['csv']
   #     fs = FileSystemStorage()
   #     name = fs.save(uploaded_file.name, uploaded_file)
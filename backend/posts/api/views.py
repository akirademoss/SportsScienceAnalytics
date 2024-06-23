from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
import os
import pandas as pd
import numpy as np
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
        fpath = os.getcwd() + context['url']
        print(fpath)
        score = extract_score(fpath)
        print(score)
        os.remove(fpath)
        return Response(score)

#Converts a file to csv format
def extract_score(fpath): 
    df = pd.read_csv(fpath)
    print(df.head(3))
    arr = df["Value"].to_numpy()
    avg_heart_rate = np.mean(arr)
    print(avg_heart_rate)
    if avg_heart_rate >= 165:
        score = "Excellent"
    if 165 > avg_heart_rate >= 140:
        score = "Good"    
    if 140 > avg_heart_rate >= 120:
        score = "Fair"
    if 120 > avg_heart_rate >= 100:
        score = "Poor"
    if avg_heart_rate < 100:
        score = "Very Poor"
    return score
    
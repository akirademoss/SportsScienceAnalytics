from django.db import models

# Create your models here.

class Score(models.Model):
    name = models.CharField(max_length=40)
    score = models.TextField(max_length=15)

    def __str__(self):
        return f"Score: {self.name}"
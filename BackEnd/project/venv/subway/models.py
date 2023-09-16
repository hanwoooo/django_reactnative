from __future__ import unicode_literals # 옛날에 만들었더라도 미래의 버전도 가능하게 해주는 코드
from django.conf import settings # setting 불러오기
from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=20)

    def publish(self):
        self.published_date = timezone.now()
        self.save()
    def __str__(self):
        return self.name

# class Short_Cut(models.Model):

from django.db import models
from datetime import date
from django.contrib.auth.models import User


class Tasks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    created_at = models.DateField()
    updated_at = models.DateField(default=date.today)
    title = models.CharField(max_length=200, blank=False)
    notes = models.TextField()
    is_active = models.BooleanField(default=True)
    is_completed = models.BooleanField(default=False)
    is_favourite = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.title)

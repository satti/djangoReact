from django.db import models

class Student(models.Model):
    sname = models.CharField(max_length=35)
    fname = models.CharField(max_length=35)
    address = models.CharField(max_length=70)

    def __str__(self):
        return self.sname

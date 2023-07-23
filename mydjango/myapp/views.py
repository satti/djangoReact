from django.shortcuts import render
from .models import Student
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer

@api_view(['GET'])
def student_view(request):
    sts = Student.objects.all()
    stsdata = StudentSerializer(sts,many=True)
    return Response(stsdata.data)

@api_view(['POST'])
def student_create_view(request):
    data = request.data        
    sts = Student.objects.create(
        sname = data['sname'],
        fname = data['fname'],
        address = data['address']
    )
    serializer = StudentSerializer(sts,many=False)
    return Response(serializer.data)
from django.urls import path
from . import views
urlpatterns = [
    path('api/',views.student_view, name='student-view'),
    path('api/create/',views.student_create_view,name='student-create-view'),
]
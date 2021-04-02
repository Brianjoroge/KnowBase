from django.db import models

from django.utils import timezone
# Create your models here.

from ckeditor.fields import RichTextField
from django.db import models

# Create your models here.

class MainArticle(models.Model):
    # describe and bhagwandas blog
    title = models.CharField(max_length=200)
    icons = models.CharField(max_length=100)
    def __str__(self):
        return self.title


class Article(models.Model):
    section = models.ForeignKey(MainArticle,on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    published = models.BooleanField(default=0)
    image = models.ImageField(upload_to='uploads/')
    update_date = models.DateTimeField(auto_now=True)
    content = RichTextField()

class Comment(models.Model):
    post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    # approved_comment = models.BooleanField(default=False)

    # def approve(self):
    #     self.approved_comment = True
    #     self.save()

    def __str__(self):
        return self.text
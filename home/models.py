from django.db import models

from django.utils import timezone
# Create your models here.

from ckeditor.fields import RichTextField
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Customization(models.Model):
    user = models.OneToOneField(User, related_name="customize", on_delete=models.CASCADE)
    company_title = models.CharField(max_length=200)
    support_email  = models.CharField(max_length=100)
    company_logo  = models.ImageField(upload_to='uploads/company_logo')
    user_image  = models.ImageField(upload_to='uploads/user_image')
    about_me  = models.CharField(max_length=500)
    facebook_link  = models.CharField(max_length=100)
    twitter_link  = models.CharField(max_length=100)
    insta_link  = models.CharField(max_length=100)
    font  = models.IntegerField(max_length=1)
    header_color  = models.IntegerField(max_length=1)
    rtl_mode  = models.BooleanField()
    navigation_links  = models.CharField(max_length=100)
    navigation_links_title   = models.CharField(max_length=100)
    home_page   = models.IntegerField(max_length=1)
    layout_page  = models.IntegerField(max_length=1)
    article_page  = models.IntegerField(max_length=1)
    custom_domain   = models.CharField(max_length=100)
    
    def __str__(self):
        return self.company_title

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
    image = models.ImageField(upload_to='uploads/article')
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
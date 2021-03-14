from home.models import Article
from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('author', 'text',)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({'class': 'form-control'})
    


class ArticleForm(forms.ModelForm):
    # create meta class
    class Meta:
        # specify model to be used
        model = Article

        # specify fields to be used
        fields = ['section', 'title', 'content']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({'class': 'form-control'})
            
        self.fields['title'].widget.attrs.update({'id': 'article_title'})
        # self.fields['content'].widget.attrs.update({'id': 'article_content'})
        

    def clean(self):
        cleaned_data = super(ArticleForm, self).clean()

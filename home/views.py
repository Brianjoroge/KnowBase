from django.shortcuts import render, redirect, get_object_or_404
from django.http.response import JsonResponse,HttpResponse
from .forms import ArticleForm, CommentForm
import openai
from .models import Article, MainArticle
from django.db.models import Count
from django.conf import settings # new
from django.views.decorators.csrf import csrf_exempt 
import stripe
from django.views.generic import TemplateView



openai.api_key = "sk-exLmhJVVMDqkAu4qyQ6n8syqwwyLA9IxJomrr5P0"

def newarticle(request):
    context=dict()
    form = ArticleForm(request.POST or None)
    if request.method == 'POST':

        if form.is_valid():
            # process form data
            obj = Article()  # gets new object
            obj.title = form.cleaned_data['title']
            obj.section = form.cleaned_data['section']
            obj.content = form.cleaned_data['content']
            print(request.POST)
            if 'save_and_publish' in request.POST['commit']:
                obj.published = 1
            elif 'save_as_draft' in request.POST['commit']:
                obj.published = 0
            obj.save()
            return redirect('app')
    else:
        form = ArticleForm()

    context['form'] = form
    return render(request, 'app/new_article.html',context)

def newuser(request):
    return render(request, 'users/new.html')


def app(request):
    # titles = MainArticle.objects.all()
    titles = MainArticle.objects.annotate(section_count=Count('article'))
    for t in titles:
        print(t )
    # count = Article.objects.filter().count()
    return render(request, 'app/app.html',{'title':titles})
 

def newsection(request):
    if request.method == 'POST':
        obj = MainArticle()
        section_title = request.POST.get('section[name]')
        section_icon = request.POST.get('section[thumbnail_icon_name]')
        obj.title = section_title
        obj.icons = section_icon
        obj.save()
        print(section_title, section_icon)
        return render(request, 'app/app.html')
    return render(request, 'app/new.html')



def details(request,id):
    print(id)
    section_details = get_object_or_404(MainArticle ,id = id)
    
    articles = Article.objects.filter(section__id = id)
    print(articles)
    return render(request, 'app/details.html',{"articles":articles, "section_details":section_details})


# def newarticle(request):
    
#     return render(request, 'app/new_article.html')

def section_describe(request,id):
    section_name = get_object_or_404(MainArticle, id = id)
    article = Article.objects.filter(section__id=id)
    return render(request, 'app/published_sections.html', {"articles": article, "section_name": section_name.title})




def published_article(request,id):
    article = get_object_or_404(Article, id=id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = article
            comment.save()
            return redirect('published_article', id=id)
    else:
        form = CommentForm()
    return render(request, 'app/published_article.html', {"article":article,'form': form})

def view_article(request,id):
    article = get_object_or_404(Article,id = id)
    print(article)
    return render(request, 'app/view_article.html', {"articles":article})


def article_writer(request):
    if request.method == 'POST':
        print(request.POST)
        company = request.POST.get('company_name')
        title = request.POST.get('article_title')
        points = request.POST.getlist('bullet_points[]')
        points = "|".join([x.strip() for x in points if x.strip()])
        
        # prompt = """company: Umbrella Corp.\ntitle: How do you protect my privacy?\npoints: we use state of the art encryption\nall requests are protected by HTTPS\nevery employee is carefully vetted\narticle:The Umbrella Corp. platform treats your data as if it were our own. It's our highest priority to protect your data, and we go to great lengths to do so.\nEvery Umbrella Corp. employee has been carefully vetted, and we use the highest security protocols in the industry. All requests are protected by HTTPS, HSTS, and strong cipher suites. We use professional-grade data centers that are SAS 70 Type II compliant. Our systems are monitored 24 hours a day, 7 days a week.\nWe use only state-of-the-art encryption techniques to protect your data. All data is encrypted on your computers before being uploaded to Umbrella Corp.'s servers. This ensures that no one can access your information on the way to us. Once we receive your data, we store it in an encrypted format until you decide to delete it or download it again.\nAll Umbrella Corp. employees must pass a rigorous background check before joining our team. This process includes a fingerprint check of all employees and their immediate family members. We also verify that they have no criminal record or history of violent behavior using multiple third-party databases before they can start work with us.\n\ncompany: {company}\ntitle:{title}\npoints:{points}\narticle:"""
        prompt = """company: Umbrella Corp.
title: How do you protect my privacy?
points: we use state of the art encryption|all requests are protected by HTTPS|every employee is carefully vetted
article: The Umbrella Corp. platform treats your data as if it were our own. It's our highest priority to protect your data, and we go to great lengths to do so.\nEvery Umbrella Corp. employee has been carefully vetted, and we use the highest security protocols in the industry. All requests are protected by HTTPS, HSTS, and strong cipher suites. We use professional-grade data centers that are SAS 70 Type II compliant. Our systems are monitored 24 hours a day, 7 days a week.\nWe use only state-of-the-art encryption techniques to protect your data. All data is encrypted on your computers before being uploaded to Umbrella Corp.'s servers. This ensures that no one can access your information on the way to us. Once we receive your data, we store it in an encrypted format until you decide to delete it or download it again.\nAll Umbrella Corp. employees must pass a rigorous background check before joining our team. This process includes a fingerprint check of all employees and their immediate family members. We also verify that they have no criminal record or history of violent behavior using multiple third-party databases before they can start work with us.
###
company: OpenAI
title: OpenAI choose to release an API
points: commercializing the technology|AI research|very expensive to run|misuse of the technology
article: There are three main reasons we did this. First, commercializing the technology helps us pay for our ongoing AI research, safety, and policy efforts.\nSecond, many of the models underlying the API are very large, taking a lot of expertise to develop and deploy and making them very expensive to run. This makes it hard for anyone except larger companies to benefit from the underlying technology. We’re hopeful that the API will make powerful AI systems more accessible to smaller businesses and organizations.\nThird, the API model allows us to more easily respond to misuse of the technology. Since it is hard to predict the downstream use cases of our models, it feels inherently safer to release them via an API and broaden access over time, rather than release an open source model where access cannot be adjusted if it turns out to have harmful applications.
###
company: Porsche
title: Porsche's new Taycan Cross Turismo is an £80,000 electric sports car that doubles as a family estate that can go off-road
points: Porsche's first electric off-road estate car - the Taycan Cross Turismo - has been unveiled in Germany today|It's an extended version of Porsche's award-winning Taycan electric sport car with a raised ride height|Prices will range from £79,340 to £139,910 for the top-spec Taycan Turbo S Cross Turismo|And for the price of a new budget car, you can specify matching Porsche eBikes costing up to £9,500 each
article: The wraps are off and Porsche’s new electric sports car estate has now been officially unveiled - ideal for those who want to win a game of Top Trumps at the school gates or on a tip run.\nThe full reveal comes after This is Money and MailOnline was given an exclusive UK road-test of a lightly disguised pre-production version of the Porsche Taycan Cross Turismo – indeed of the very same vehicle that made its debut on the world stage today – as part of an epic drive across the USA and Europe.\nPorsche's £80,000 low-slung battery-powered estate car is a more practical and slightly higher riding version of its Taycan electric car, which has won plaudits for combining zero tailpipe emmissions with startling performance and handling.\nAnd for the price of a new budget car or a half-decent second hand vehicle, you can even specify one of two matching Porsche eBikes costing up to £9,500 that can be carried on the back.\nThe new all-rounder Cross Turismo – equipped with four individual seats or 5 with a rear bench - adds a new shooting-brake body-style to the successful Taycan line-up, available up to now only as a svelte sports saloon.\nThe Performance Battery Plus with a total capacity of 93.4 kW is a standard feature across the Turismo range which, at launch, comprises four derivatives priced from just under £80,000 to a fraction under £140,000. However, added extras may soon bump that up.\nThe range-topping car we drove in the UK is the £139,910 Taycan Turbo S Cross Turismo. In normal mode it develops 625 horse-power (460 kW) rising to 761 horsepower (560 kW) in launch-control over-boost which propels two electric motors – one per axle – with a two-speed gear-box on rear.\nThis enables it to accelerate from a standing start to 62mph on just 2.9 seconds, to 100 mph in 6.2 seconds, and 124mph in 9.7 seconds, up to top speed 155 mph.\nYet it still has a range of between 241 and 260 miles.
###
company: {company}
title: {title}
points: {points}
article:"""
        
        completion = openai.Completion.create(
          engine="davinci-instruct-beta", #"cushman-alpha", # "davinci-instruct-beta",
          n=1,
          max_tokens=482,
          stop=["###"],
          prompt=prompt.replace("{points}", points).replace("{title}", title).replace("{company}", company),
          temperature=0.85,
          top_p=1,
          frequency_penalty=1,
          presence_penalty=0.45,
        )
        # print(prompt.replace("{points}", points).replace("{title}", title).replace("{company}", company))
        choice = completion["choices"][0]
        # return choice["text"]
        
        return JsonResponse({
            "final_choice": choice["text"].replace("\n","\n\n"),
        })
    return render(request, 'app/new_article.html')

def editsection(request):
    return render(request, 'app/edit.html')

def customization(request):
    return render(request, 'app/customization.html')

def general(request):
    return render(request, 'app/general.html')

@csrf_exempt
def billing(request):
    # new
        
    # if request.method == 'GET':
    #     stripe_config = {'publicKey': settings.STRIPE_PUBLISHABLE_KEY}
    #     return JsonResponse(stripe_config, safe=False)
    return render(request, 'app/billing.html')

@csrf_exempt
def config(request):
    # new
        
    if request.method == 'GET':
        stripe_config = {'publicKey': settings.STRIPE_PUBLISHABLE_KEY}
        return JsonResponse(stripe_config, safe=False)



@csrf_exempt
def create_checkout_session(request):
    if request.method == 'GET':
        domain_url = 'http://localhost:8000/'
        stripe.api_key = settings.STRIPE_SECRET_KEY
        try:
            # Create new Checkout Session for the order
            # Other optional params include:
            # [billing_address_collection] - to display billing address details on the page
            # [customer] - if you have an existing Stripe Customer ID
            # [payment_intent_data] - capture the payment later
            # [customer_email] - prefill the email input in the form
            # For full details see https://stripe.com/docs/api/checkout/sessions/create

            # ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
            checkout_session = stripe.checkout.Session.create(
                client_reference_id=request.user.id if request.user.is_authenticated else None,
                success_url=domain_url + 'success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=domain_url + 'cancelled/',
                payment_method_types=['card'],
                mode='payment',
                line_items=[
                    {
                        'name': 'Annual - $20/mo (paid annually)',
                        'quantity': 1,
                        'currency': 'usd',
                        'amount': '24000',
                    }
                ]
            )
            return JsonResponse({'sessionId': checkout_session['id']})
        except Exception as e:
            return JsonResponse({'error': str(e)})

def members(request):
    return render(request, 'app/members.html')

def newmember(request):
    return render(request, 'app/member_new.html')




class SuccessView(TemplateView):
    template_name = 'app/success.html'


class CancelledView(TemplateView):
    template_name = 'app/cancelled.html'


@csrf_exempt
def stripe_webhook(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY
    endpoint_secret = settings.STRIPE_ENDPOINT_SECRET
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed':
        print("Payment was successful.")
        # TODO: run some custom code here

    return HttpResponse(status=200)
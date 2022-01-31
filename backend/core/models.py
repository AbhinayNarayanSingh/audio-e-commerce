from django.db import models
from django.urls import reverse, reverse_lazy
from django.utils.translation import gettext, gettext_lazy as _
from django.utils.text import slugify


from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):

    _id = models.AutoField(primary_key=True, unique=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True) 
    name = models.CharField( max_length=250, blank=True, null=True)
    image = models.ImageField(upload_to="product/", null=True, blank=True)
    brand = models.CharField( max_length=250, blank=True, null=True)
    category = models.CharField( max_length=250, blank=True, null=True)
    description = models.TextField()
    rating = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    numReview = models.IntegerField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateField(auto_now=True)

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Product", kwargs={"pk": self.pk})


class Review(models.Model):

    _id = models.AutoField(primary_key=True, unique=True, editable=False)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    name  = models.CharField( max_length=250, blank=True, null=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    comment = models.TextField()

    class Meta:
        verbose_name = _("Review")
        verbose_name_plural = _("Reviews")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Review_detail", kwargs={"pk": self.pk})


class Order(models.Model):

    _id = models.AutoField(primary_key=True, unique=True, editable=False)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    paymentMethod = models.CharField( max_length=250, blank=True, null=True)
    tax = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    shipping = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    total = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    isPaid = models.BooleanField(default=False)
    isDelivered = models.BooleanField(default=False)
    createdAt = models.DateField(auto_now=True)
    paidAt = models.DateField(blank=True, null=True)
    deliveredAt = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return str(self.createdAt)

    def get_absolute_url(self):
        return reverse("Order_detail", kwargs={"pk": self.pk})


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
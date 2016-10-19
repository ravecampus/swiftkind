from django.db import models

from mezzanine.pages.models import Page
from mezzanine.pages.models import RichTextPage
from mezzanine.core.models import Displayable
from mezzanine.core.models import Orderable

from django.utils.translation import ugettext, ugettext_lazy as _
from mezzanine.core import fields

from mezzanine.core.models import RichText


class ContentPage(Page):
    """
    """
    DEFAULT = '1'
    TEMPLATES = (('1','FULL WIDTH'), ('2', 'TWO COLUMN'), ('3','THREE COLUMN'))
    template = models.CharField(max_length=225, choices=TEMPLATES, default=DEFAULT)
    name = models.CharField(max_length=225, blank=True)
    logo = fields.FileField("Logo", upload_to="logo/", format="Image")
    video = models.FileField("Video Background", upload_to="background/", blank=True)


class Section(models.Model):
    """ Section of every navigation
    """
    page = models.ForeignKey(ContentPage, related_name="section")
    nabvar = models.CharField("Menu bar", max_length=50)
    title  = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    technology = models.ManyToManyField("Technology", blank=True)
    description_project = models.TextField(max_length=255, blank=True)
    project = models.ManyToManyField("Project", blank=True)

    # carousel = models.ManyToManyField("Carousel", blank=True)

    class Meta:
        verbose_name = _("Menu")
        verbose_name_plural = _("Menu")

    def __str__(self):
        return '{}'.format(self.nabvar)


class Technology(models.Model):
    """
    """
    icon = fields.FileField("Technologies icon", upload_to="technologies/", format="Image")

    def __str__(self):
        return '{}'.format(self.icon)
  
    class Meta:
        verbose_name =_("Tehnology")
        verbose_name_plural = _("Technoogies")


class Project(models.Model):
    """
    """
    name = models.CharField(max_length=225)
    title = models.CharField(max_length=225)
    background = fields.FileField("Project", upload_to="projects/", format="Image")

    def __str__(self):
        return '{}'.format(self.name)


# class Carousel(models.Model):
#     """
#     """
#     paragraph1 = models.TextField()
#     paragraph2 = models.TextField()
#     paragraph3 = models.TextField()
#     full_name = models.CharField(max_length=225)
#     position = models.CharField(max_length=225)
#     company = models.CharField(max_length=225)

#     def __str__(self):
#         return '{}'.format(self.full_name)
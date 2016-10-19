from copy import deepcopy
from django.contrib import admin
from mezzanine.pages.admin import PageAdmin
from .models import Section, Technology, Project, ContentPage

from mezzanine.pages.models import RichTextPage
from mezzanine.forms.models import Form
from mezzanine.core.models import Displayable
from mezzanine.galleries.models import Gallery
from mezzanine.blog.models import BlogPost
from mezzanine.generic.models import ThreadedComment
from mezzanine.pages.models import Link
from mezzanine.core.admin import DisplayableAdmin


class SectionInline(admin.StackedInline):
    model = Section
    extra = 1


class ContentAdmin(PageAdmin):
    inlines = (SectionInline,)
    fieldsets = deepcopy(PageAdmin.fieldsets)


class TechnologyAdmin(admin.ModelAdmin):
    model = Technology
    list_display = ['icon']


class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ['name', 'title', 'background']


admin.site.register(Project, ProjectAdmin)
admin.site.register(Technology, TechnologyAdmin)    


admin.site.register(ContentPage, ContentAdmin)

admin.site.unregister(RichTextPage)
admin.site.unregister(Form)
admin.site.unregister(Gallery)
admin.site.unregister(BlogPost)
admin.site.unregister(ThreadedComment)
admin.site.unregister(Link)

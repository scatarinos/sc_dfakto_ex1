from odoo import http
from odoo.http import request

import logging

_logger = logging.getLogger(__name__)

class MyController(http.Controller):

     @http.route('/sc_dfakto_ex1/form-controller/', type='http', auth='public', website=True, csrf=False, multilang=False)
     def my_controller_post(self, **post):
         name = post.get('name')
         email = post.get('email')
         description = post.get('description')
         _logger.debug('::::: {}'.format(post))
         # TODO: create a model save this data

         return request.redirect('/')
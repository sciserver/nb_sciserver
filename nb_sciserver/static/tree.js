define(['jquery', "base/js/utils", "base/js/namespace"], function ($, utils, Jupyter) {
    const load_ipython_extension = function () {
		const base_url = (Jupyter.notebook_list || Jupyter.notebook).base_url;
		utils.promising_ajax(`${base_url}new_default?type=tree`, {
			method: 'PUT',
		});

		$('#tabs').append('<li><button class="btn btn-link" type="button" data-toggle="modal" data-target="#sciserver-jupyterlab-dialog"><i class="fa fa-external-link" aria-hidden="true"></i>Switch To JupyterLab</button></li>');
		$('body').append(
			'<div id="sciserver-jupyterlab-dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="sciserver-jupyterlab-title">'+
				'<div class="modal-dialog" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
							'<h4 class="modal-title" id="sciserver-jupyterlab-title">JupyterLab</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p><a href="https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html">JupyterLab</a> is the next-generation user interface for Jupyter. In addition to supporting the same Jupyter notebooks as the classical interface, JupyterLab has first-party support for scripts, documents, and other data formats. JupyterLab is currently in <strong>beta</strong>, but <a href="https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906">ready</a> for daily use.</p>'+
							'<p><i aria-hidden="true" class="fa fa-exclamation-circle"></i>&nbsp;From JupyterLab, you can always switch back to the classical notebook interface from the <samp>Help</samp> menu. SciServer Compute will remember the last interface that was opened.</p>'+
							'<p class="text-warning">Note: Microsoft browsers (Edge and Internet Explorer) are not supported by JupyterLab.</p>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<button type="button" class="btn btn-default" data-dismiss="modal">Stay with Classical Interface</button>'+
							`<a href="${base_url}lab?reset" class="btn btn-primary">Switch to JupyterLab</button>`+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>');
    };

    return {
        load_ipython_extension : load_ipython_extension,
    };
});

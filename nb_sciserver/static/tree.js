define(['jquery', "base/js/utils", "base/js/namespace"], function ($, utils, Jupyter) {
    const load_ipython_extension = function () {
		const base_url = (Jupyter.notebook_list || Jupyter.notebook).base_url;
		utils.promising_ajax(`${base_url}new_default?type=tree`, {
			method: 'PUT',
		});
		$('#tabs').append(`<li><a href="${base_url}lab?reset"><i class="fa fa-external-link" aria-hidden="true"></i>Switch To JupyterLab</a></li>`);
    };

    return {
        load_ipython_extension : load_ipython_extension,
    };
});

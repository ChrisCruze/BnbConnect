function dataTablesColumnsCreateFromBaseColumns(base_columns, data) {
	return base_columns;
	console.log({ base_columns, data });
	if (data == undefined) {
		return base_columns;
	} else {
		all_columns = datatables_columns_create_from_data(data);
		base_column_names = _.map(base_columns, "data");
		all_columns_filtered = all_columns.filter(function (D) {
			return base_column_names.indexOf(D["data"]) == -1;
		});
		columns = base_columns.concat(all_columns_filtered);
		console.log({ columns, all_columns });
		return columns;
	}
}

function pull_csv_data({ url, updateData }) {
	sharepoint_read_from_file_url_promise(url)
		.then((response) => {
			var parsed_data = papa_parse_array_from_raw_file(response) || [];
			console.log({ parsed_data });
			updateData(parsed_data);
		})
		.catch((error) => {
			// console.log({error})
		});
}

function datatable_formulate({ data, columns, id }) {
	var buttons = datatables_config_buttons_create_base();
	var config = datatables_config_create_base(data, columns, buttons);
	datatables_determine_create_update("#" + id, config, data);
}

function editor_object_create({ id, idSrc, editor_fields }) {
	var editor = new $.fn.dataTable.Editor({
		table: "#" + id,
		idSrc: idSrc || "id",
		fields: editor_fields,
	});
	return editor;
}

function datatables_firebase_react_editor_function_actions_create(
	data,
	editor_create_function
) {
	items_to_add = Object.values(data.data);
	items_to_add.forEach(function (item) {
		editor_create_function(item);
	});
}

function datatables_firebase_react_editor_function_actions_edit(
	json,
	editor_update_function
) {
	json_array = json.data;
	json_array.forEach(function (D) {
		editor_update_function(D);
	});
}

function datatables_firebase_react_editor_function_actions_remove(
	data,
	editor_delete_function
) {
	items_to_delete = Object.values(data.data);
	items_to_delete.forEach(function (D) {
		editor_delete_function(D);
	});
}

function datatables_firebase_react_editor_function_actions_apply2(
	editor_object,
	editor_create_function,
	editor_update_function,
	editor_delete_function
) {
	//   editor_object.off("postSubmit", function(e, json, data, action, xhr) {
	//   if (action == "create") {
	//     return datatables_firebase_react_editor_function_actions_create(data, editor_create_function);
	//   } else if (action == "edit") {
	//     return datatables_firebase_react_editor_function_actions_edit(json, editor_update_function);
	//   } else if (action == "remove") {
	//     return datatables_firebase_react_editor_function_actions_remove(data, editor_delete_function);
	//   } else {
	//     return false;
	//   }
	// });
	editor_object.on("postSubmit", function (e, json, data, action, xhr) {
		if (action == "create") {
			return datatables_firebase_react_editor_function_actions_create(
				data,
				editor_create_function
			);
		} else if (action == "edit") {
			return datatables_firebase_react_editor_function_actions_edit(
				json,
				editor_update_function
			);
		} else if (action == "remove") {
			return datatables_firebase_react_editor_function_actions_remove(
				data,
				editor_delete_function
			);
		} else {
			return false;
		}
	});
	return editor_object;
}

function implement_actions_on_editor({ editor, create, update, remove }) {
	function editor_create_function(D) {
		var upload_dict = { ...D };
		create(upload_dict);
	}
	function editor_update_function(D) {
		update(D);
	}

	function editor_delete_function(D) {
		remove(D);
	}

	datatables_firebase_react_editor_function_actions_apply2(
		editor,
		editor_create_function,
		editor_update_function,
		editor_delete_function
	);
}

function click_func_execute({ id, select_func, editor }) {
	$("#" + id).on("click", "tbody td", function () {
		var row_column_dict = datatables_row_column_dictionary("#" + id, this);
		if (select_func != undefined) {
			select_func(row_column_dict, this, editor);
		}
	});
}

function click_func_execute_link({ id, link_func, editor }) {
	$("#" + id).on("click", "tbody td a", function () {
		const this_elem = $(this).closest("td");
		const td_element = $(this_elem);
		var row_column_dict = datatables_row_column_dictionary(
			"#" + id,
			td_element
		);
		if (link_func != undefined) {
			link_func(row_column_dict, editor, this, td_element);
		}
	});
}

function datatable_formulate_crud({
	idSrc,
	editor_fields,
	data,
	columns,
	id,
	create,
	update,
	remove,
	select_func,
}) {
	var editor = editor_object_create({ id, idSrc, editor_fields });

	const config = {
		dom: '<"html5buttons"B>lTfgitp',
		data: data || [],
		columns: columns,
		select: true,
		paging: false,
		scrollX: true,
		colReorder: true,
		autoWidth: true,
		buttons: datatables_config_buttons_create_base_editor(editor),
	};

	$("#" + id).DataTable(config);

	implement_actions_on_editor({ editor, create, update, remove });
	click_func_execute({ id, select_func });
}

function datatables_config_buttons_create_base_editor_local(editor) {
	button_params = [
		{
			extend: "create",
			editor: editor,
			text: "Create",
		},
		{
			extend: "remove",
			editor: editor,
		},
		{
			extend: "edit",
			editor: editor,
		},
	];
	return button_params;
}

function initiate_table({
	editor,
	id,
	select_func,
	data,
	columns,
	link_func,
	buttons,
}) {
	const buttonsCore = (buttons || []).concat(
		datatables_config_buttons_create_base_editor_local(editor)
	);
	const config = {
		//dom: '<"html5buttons"B>lTfgitp',
		dom: '<"html5buttons"B>t',
		data: data || [],
		columns: columns,
		select: true,
		paging: false,
		scrollX: true,
		colReorder: true,
		autoWidth: true,
		buttons: buttonsCore,
	};
	$("#" + id).DataTable(config);
	click_func_execute({ id, select_func, editor });
	click_func_execute_link({ id, link_func, editor });
}

function datatables_config_buttons_create_base_editor_save(editor) {
	button_params = [
		{
			extend: "excel",
			title: document.title,
		},
		{
			extend: "colvis",
			title: document.title,
		},
		{
			extend: "create",
			editor: editor,
			text: "Create",
		},
		{
			extend: "remove",
			editor: editor,
		},
		{
			extend: "edit",
			editor: editor,
		},
		{
			text: "Clear",
			name: "Clear",
			action: function (e, dt, node, config) {
				dt.columns("").search("").draw();
				$.fn.dataTable.ext.search = [];
				dt.draw();
			},
		},
		{
			text: "Save",
			name: "Save",
			action: function (e, dt, node, config) {
				var table_data = dt.rows({ page: "current" }).data().toArray();
				paramDict = string_params_pull_split(
					window.location.href.split("?")[1]
				);
				save_sharepoint_csv(paramDict["file_name"], table_data);
				console.log({ dt, table_data });
			},
		},
	];
	return button_params;
}
function initiate_table_save({
	editor,
	id,
	select_func,
	data,
	columns,
	link_func,
	buttons,
}) {
	const buttonsCore = (buttons || []).concat(
		datatables_config_buttons_create_base_editor_save(editor)
	);
	const config = {
		//dom: '<"html5buttons"B>lTfgitp',
		dom: '<"html5buttons"B>t',
		data: data || [],
		columns: columns,
		select: true,
		paging: false,
		scrollX: true,
		colReorder: true,
		autoWidth: true,
		buttons: buttonsCore,
	};
	$("#" + id).DataTable(config);
	click_func_execute({ id, select_func, editor });
	click_func_execute_link({ id, link_func, editor });
}

function refresh_table({ id, data }) {
	$("#" + id)
		.DataTable()
		.rows()
		.remove()
		.draw();
	$("#" + id)
		.DataTable()
		.rows.add(data)
		.draw();
}

function refresh_actions({ editor, create, update, remove }) {
	implement_actions_on_editor({ editor, create, update, remove });
}

function columnEditorFieldsCreate(fields) {
	var column_fields = _.map(fields, function (D) {
		var field = D; //['field']
		return {
			name: field,
			data: field,
			label: field,
			title: field,
			visible: true,
		};
	});
	column_fields.push({
		name: "ID",
		data: "ID",
		label: "ID",
		title: "ID",
		visible: false,
	});

	var editor_fields = _.map(fields, function (D) {
		var field = D; //['field']
		return {
			label: field,
			name: field,
		};
	});
	return { column_fields, editor_fields };
}
//sharepoint_identifier,table_type, json, field, type
function suiTableDictCreateBase({ id, columns, data, pageData, setPageData }) {
	function create(D) {
		// var data = pageData[id] == undefined ? [] : pageData[id];

		dictWithID = {
			...D,
			ID: moment().unix(),
			profile_name: pageData["profile_name"],
			profile_sid: pageData["profile_sid"],
			time_stamp: moment().format(),
		}; //data.length}

		const newData = [...data, dictWithID];
		var newDict = {};
		newDict[id] = newData;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
		// var combined_dict = dictionary_combine(D,{sharepoint_identifier,table_type:'data'})
		// var D = {json:JSON.stringify(Dcombined_dict),sharepoint_identifier,table_type:'data'}
		// sp_create_list_item('Data Input Utility',D)
	}
	function update(D) {
		// var data = pageData[id] == undefined ? [] : pageData[id];

		console.log({ D });
		//   console.log({update:D})
		var ID = D["ID"];
		const filteredData = data.filter(function (row) {
			return row["ID"] != ID;
		});
		const updatedData = [
			...filteredData,
			{
				...D,
				profile_name: pageData["profile_name"],
				profile_sid: pageData["profile_sid"],
				time_stamp: moment().format(),
			},
		];
		var newDict = {};
		newDict[id] = updatedData;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
		// var combined_dict = dictionary_combine(D,{sharepoint_identifier,table_type:'data'})
		// var D = {json:JSON.stringify(combined_dict),sharepoint_identifier,table_type:'data'}
		// console.log({update:D})

		// sp_update_list_item('Data Input Utility',ID,D)
		// console.log({D})
		// console.log({update:D})
	}
	function remove(D) {
		// var data = pageData[id] == undefined ? [] : pageData[id];

		console.log({ D });
		var ID = D["ID"];
		const filteredData = data.filter(function (row) {
			return row["ID"] != ID;
		});
		var newDict = {};
		newDict[id] = filteredData;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
		// console.log({remove:D})
		// sharepoint_delete_item('Data Input Utility',D['ID'])
	}
	function select_func(D) {
		console.log({ select: D });
		// var program = D.row.program
		// updateFilterDict({program:program})
	}

	var { column_fields, editor_fields } = columnEditorFieldsCreate(columns);
	const table_dict = {
		columns: column_fields,
		idSrc: "ID",
		editor_fields: editor_fields, //application_manager_columns_define_tasks(),
		create: create,
		update: update,
		remove: remove,
		select_func: select_func,
		data: data,
		id,
	};
	return table_dict;
}

//sharepoint_identifier,table_type, json, field, type
function suiTableDictCreate({ configDict, pageData, setPageData }) {
	const columns = configDict["value"].split(","); //["a"];
	const id = configDict["id"];
	var data =
		pageData[configDict["id"]] == undefined
			? []
			: pageData[configDict["id"]];
	const table_dict = suiTableDictCreateBase({
		id,
		data,
		columns,
		pageData,
		setPageData,
	});
	return table_dict;
}

//sharepoint_identifier,table_type, json, field, type
function dataTableDictCreateCRUDBase({ id, columns, data }) {
	function create(D) {
		console.log({ create: D });
	}
	function update(D) {
		console.log({ update: D });
	}
	function remove(D) {
		console.log({ remove: D });
	}
	function select_func(D) {
		console.log({ select: D });
	}

	var { column_fields, editor_fields } = columnEditorFieldsCreate(columns);
	const table_dict = {
		columns: column_fields,
		idSrc: "ID",
		editor_fields: editor_fields, //application_manager_columns_define_tasks(),
		create: create,
		update: update,
		remove: remove,
		select_func: select_func,
		data: data,
		id,
	};
	return table_dict;
}

function queryDictFromURLParams() {
	query_params = window.location.href.split("?")[1];
	var lookupDict = string_params_pull_split(query_params);
	return lookupDict;
}
//sharepoint_identifier,table_type, json, field, type
function dataTableDictCreateCRUD({ columns, data, id }) {
	var calculatedColumns = queryDictFromURLParams()["columns"].split(","); //['a']//Object.keys(data[0]) //["tf_sub_platform_nm"]//datatables_columns_create_from_data_wrapper(data)
	var dataUpdated = _.map(data, (D, num) => {
		return { ...D, ID: num };
	});
	const table_dict = dataTableDictCreateCRUDBase({
		id,
		data: dataUpdated,
		columns: calculatedColumns,
	});
	return table_dict;
}

//sharepoint_identifier,table_type, json, field, type
function dataTableObjectCreate({ columns, data, id }) {
	var calculatedColumns = queryDictFromURLParams()["columns"].split(","); //['a']//Object.keys(data[0]) //["tf_sub_platform_nm"]//datatables_columns_create_from_data_wrapper(data)
	var dataUpdated = _.map(data, (D, num) => {
		return { ...D, ID: num };
	});
	const table_dict = dataTableDictCreateCRUDBase({
		id,
		data: dataUpdated,
		columns: calculatedColumns,
	});
	return table_dict;
}

function dictionary_keys_remove(item, remove_keys) {
	check_keys = Object.keys(item).filter(function (k) {
		return remove_keys.indexOf(k) == -1;
	});
	D = {};
	check_keys.forEach(function (i) {
		D[i] = D[i] || "null";
	});
	return D;
}

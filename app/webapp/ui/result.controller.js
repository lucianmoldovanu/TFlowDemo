sap.ui.controller("hack.ui.result", {
	onAfterRendering: function() {
		_oTable = sap.ui.getCore().byId("idApp").getPage("Result").byId("idProductsTable");
	},
	createDataModel: function(aData) {
		var oData = aData
			.filter(function(rec) {return rec !== ""})
			.map(function(rec) {return {row: rec}});
		var oModel = new sap.ui.model.json.JSONModel({data: oData});
		_oTable.setModel(oModel);
		oModel.refresh();
	}
});

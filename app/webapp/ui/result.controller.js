sap.ui.controller("hack.ui.result", {
	onAfterRendering: function() {
		_oTable = this.getView().byId("idProductsTable");
	},
	createDataModel: function(aData) {
		var oData = aData.map(function(rec) {return {row: rec}});
		var oModel = new sap.ui.model.json.JSONModel({data: oData});
		_oTable.setModel(oModel);
		oModel.refresh();
	}
});

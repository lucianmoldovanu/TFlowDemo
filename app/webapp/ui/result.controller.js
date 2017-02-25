sap.ui.controller("hack.ui.result", {
	createDataModel: function(aData) {
		var oData = aData.map(function(rec) {return {row: rec}});
		var oModel = new sap.ui.model.json.JSONModel({data: oData});
		this.getView().byId("idTable").setModel(oModel);
		oModel.refresh();
	}
});

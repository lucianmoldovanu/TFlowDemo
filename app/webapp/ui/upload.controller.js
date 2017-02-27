sap.ui.controller("hack.ui.upload", {
	onInit: function(oController) {
		_oController = oController;
	},
	
	onAfterRendering: function() {
		_oTable = sap.ui.getCore().byId("idApp").getPage("Upload").byId("idProductsTable");
	},
	
	handleUploadPress: function(oEvent) {
	    var oFileUploader = this.getView().byId("fileUploader");
	    oFileUploader.upload();
	},
	
	handleUploadComplete: function(oEvent) {
		sap.ui.getCore().byId('idApp').to('Result');
		//sap.ui.controller('hack.ui.upload')
		this.createDataModel(oEvent.getParameter('response').split('\n').filter(function(rec) {return rec != ""});
	},
	
	createDataModel: function(aData) {
		var oData = aData.map(function(rec) {return {row: rec}});
		var oModel = new sap.ui.model.json.JSONModel({data: oData});
		_oTable.setModel(oModel);
		oModel.refresh();
	}
});

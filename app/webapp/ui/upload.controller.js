sap.ui.controller("hack.ui.upload", {
	onInit: function(oController) {
		_oController = oController;
	},
	
	handleUploadPress: function(oEvent) {
	    var oFileUploader = this.getView().byId("fileUploader");
	    oFileUploader.upload();
	},
	
	handleUploadComplete: function(oEvent) {
		sap.ui.getCore().byId('idApp').to('Result');
		sap.ui.controller('hack.ui.result').createDataModel(oEvent.getParameter('response').split('\n'));
	}
});
